import { getLanguageArgs } from "./args";
import { getYamlData } from "./yaml_files";
import { mergeBooks } from "./books";
import { buildBookRegexps } from "./book_regexps";
import { buildRecursive, buildTranslationPattern, buildVariablePattern, buildVariablePatternsForRegexp } from "./regexps";
import { parseTranslationRows, parseTranslationSystemsYaml } from "./translations";
import { langCodeToFileBase } from "./lang_filenames";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import YAML from "yaml";

// Get the directory containing this script file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to data directory relative to this script (src/build_lang.ts -> ../data)
const langDir = resolve(__dirname, "../data");
const translationsDir = resolve(__dirname, "../translation_systems");
const namesDir = resolve(__dirname, "../book_names/all");
const langOutputDir = resolve(__dirname, "../lang");

const buildArgs = await getLanguageArgs(langDir);
const langs = buildArgs.langs;
const yamlData = await getYamlData(langs, langDir, { cross: buildArgs.cross });
type NormalizeMode = "none" | "combining_characters";
type VariableInput = string[] | VariableItem[];
type TranslationInputRow = string | { text?: string; osis?: string; system?: string };
type ReplaceSpacesConfig = { regexp: string; replacement: string } | null;

function isRecord(value: unknown): value is Record<string, unknown> {
	return Boolean(value) && typeof value === "object";
}

const rawOptions = isRecord(yamlData.options) ? yamlData.options : {};
const rawVariables = isRecord(yamlData.variables) ? yamlData.variables : {};
const translationRows: TranslationInputRow[] = Array.isArray(yamlData.translations)
	? (yamlData.translations as TranslationInputRow[])
	: [];
const normalizeMode = (rawOptions.normalize ?? "combining_characters") as NormalizeMode;
const trailingDotsMode = (rawOptions.trailing_dots_in_variables ?? "as_is") as "optional" | "as_is";
const getVariable = (name: string): VariableInput => {
	const value = rawVariables[name];
	return Array.isArray(value) ? (value as VariableInput) : [];
};
const getOptionRegexp = (name: string): string => {
	const value = rawOptions[name];
	if (isRecord(value) && typeof value.regexp === "string") return value.regexp;
	throw new Error(`Missing required option regexp: ${name}`);
};
const replaceSpacesWith = (() => {
	const value = rawOptions.replace_characters_with;
	if (!value) return null;
	if (Array.isArray(value)) {
		const first = value[0];
		const regexp = isRecord(first) ? first.regexp : first;
		const replacement = value[1];
		if (typeof regexp === "string" && typeof replacement === "string") {
			return { regexp, replacement };
		}
		return null;
	}
	if (isRecord(value)) {
		const regexp = value.regexp;
		const replacement = value.replacement;
		if (typeof regexp === "string" && typeof replacement === "string") {
			return { regexp, replacement };
		}
	}
	return null;
})() as ReplaceSpacesConfig;

function expandNegatedCharClass(base: string, useUnicodeNumbers: boolean): string {
	const match = base.match(/^\[\^([^\]]+)\]$/);
	if (!match) return base;
	const chars = match[1];
	if (useUnicodeNumbers && chars.includes("\\p{N}")) return base;
	if (!useUnicodeNumbers && chars.includes("0-9")) return base;
	const numberClass = useUnicodeNumbers ? "\\p{N}" : "0-9";
	return `[^${chars}${numberClass}]`;
}

function buildPreBook(beforeChars: string): RegExp {
	return new RegExp(`(?:^|(?<=${beforeChars}))`, "gu");
}

function buildPreNumberBook(beforeChars: string): RegExp {
	const needsLookbehind = /\p\{L\}/.test(beforeChars);
	const expanded = expandNegatedCharClass(beforeChars, needsLookbehind);
	const lookbehind = needsLookbehind ? `(?<!\\d:(?=\\d))` : "";
	return new RegExp(`(?:^|(?<=${expanded})${lookbehind})`, "gu");
}

function buildPostBook(afterChars: string): RegExp {
	return new RegExp(`(?:(?=${afterChars})|$)`, "gu");
}

function expandAccentVariants(str: string, maxVariants = 256): string[] {
	const choices: string[][] = [];
	for (const ch of str) {
		const nfd = ch.normalize("NFD");
		const base = nfd.replace(/\p{M}+/gu, "");
		if (base !== ch) {
			choices.push([ch, base]);
		} else {
			choices.push([ch]);
		}
	}
	let variants: string[] = [""];
	for (const opts of choices) {
		const next: string[] = [];
		for (const v of variants) {
			for (const opt of opts) {
				next.push(v + opt);
				if (next.length >= maxVariants) break;
			}
			if (next.length >= maxVariants) break;
		}
		variants = next;
		if (variants.length >= maxVariants) break;
	}
	return variants;
}

function expandNormalizedStringsForYaml(strings: string[], normalize: NormalizeMode): string[] {
	if (normalize === "none") return strings;
	const out = new Set<string>();
	for (const str of strings) {
		out.add(str);
		const nfd = str.normalize("NFD");
		const stripped = nfd.replace(/\p{M}+/gu, "");
		out.add(stripped);
		out.add(nfd.normalize("NFC"));
		for (const variant of expandAccentVariants(str)) {
			out.add(variant);
		}
	}
	return [...out];
}

type ExpandCharacters = Record<string, string[]>;

function normalizeExpandCharacters(options: Record<string, unknown> | undefined): ExpandCharacters {
	const out: ExpandCharacters = {};
	if (!options) return out;

	const entries = Array.isArray(options.expand_characters) ? options.expand_characters : [];
	for (const entry of entries) {
		if (!entry || typeof entry !== "object") continue;
		const key = String((entry as { character?: unknown }).character ?? "");
		const values = Array.isArray((entry as { expand?: unknown }).expand)
			? ((entry as { expand: unknown[] }).expand).map((v) => String(v))
			: [];
		if (!key || values.length === 0) continue;
		const set = new Set<string>(values);
		set.add(key);
		out[key] = Array.from(set);
	}

	const alternateApostrophes = Array.isArray(options.alternate_straight_apostrophe_characters)
		? options.alternate_straight_apostrophe_characters.map((v) => String(v))
		: [];
	if (alternateApostrophes.length > 0) {
		const set = new Set<string>(out["'"] ?? ["'"]);
		for (const alt of alternateApostrophes) set.add(alt);
		out["'"] = Array.from(set);
	}

	return out;
}

const expandCharacters = normalizeExpandCharacters(rawOptions);

function expandTextVariantsForYaml(
	text: string,
	allowOptionalSpaces: boolean,
	allowOptionalDots: boolean,
	expandCharacters: ExpandCharacters = {},
	maxVariants = 4096
): string[] {
	const dotChars = new Set([".", "۔", "．"]);
	let variants: string[] = [""];
	for (const ch of text) {
		const next: string[] = [];
		const isSpace = ch === " ";
		const isDot = dotChars.has(ch);
		const alternates = expandCharacters[ch];
		for (const v of variants) {
			next.push(v + ch);
			if (isSpace && allowOptionalSpaces) {
				next.push(v);
			}
			if (isDot && allowOptionalDots) {
				next.push(v);
			}
			if (alternates && alternates.length > 0) {
				for (const alt of alternates) {
					if (alt !== ch) {
						next.push(v + alt);
					}
				}
			}
			if (next.length >= maxVariants) break;
		}
		variants = next;
		if (variants.length >= maxVariants) break;
	}
	return variants;
}

function normalizeVariableItems(variable: string[] | VariableItem[]): VariableItem[] {
	return (variable as (string | VariableItem)[]).map((item) => {
		if (typeof item === "string") return { text: item };
		return item;
	});
}

function expandVariableCharacters(variable: string[] | VariableItem[]) {
	if (!variable || variable.length === 0) return variable;
	const items = normalizeVariableItems(variable);
	const out: VariableItem[] = [];
	for (const item of items) {
		if (!item.text) {
			out.push(item);
			continue;
		}
		for (const text of expandTextVariantsForYaml(String(item.text), false, false, expandCharacters)) {
			out.push({ ...item, text });
		}
	}
	return out;
}
type ProcessedBook = {
	osis: string | string[];
	texts: Array<{ text: string; normalize?: "none" }>;
	groupKey: string;
	sourceId: number;
	hasBefore: boolean;
};

function canonicalOsisOrder(): string[] {
	return [
		"Gen", "Exod", "Lev", "Num", "Deut", "Josh", "Judg", "Ruth", "1Sam", "2Sam",
		"1Kgs", "2Kgs", "1Chr", "2Chr", "Ezra", "Neh", "Esth", "Job", "Ps", "Prov",
		"Eccl", "Song", "Isa", "Jer", "Lam", "Ezek", "Dan", "Hos", "Joel", "Amos",
		"Obad", "Jonah", "Mic", "Nah", "Hab", "Zeph", "Hag", "Zech", "Mal",
		"Matt", "Mark", "Luke", "John", "Acts", "Rom", "1Cor", "2Cor", "Gal", "Eph",
		"Phil", "Col", "1Thess", "2Thess", "1Tim", "2Tim", "Titus", "Phlm", "Heb", "Jas",
		"1Pet", "2Pet", "1John", "2John", "3John", "Jude", "Rev",
		"Tob", "Jdt", "GkEsth", "Wis", "Sir", "Bar", "PrAzar", "Sus", "Bel", "SgThree",
		"EpJer", "1Macc", "2Macc", "3Macc", "4Macc", "1Esd", "2Esd", "PrMan", "AddEsth", "AddDan"
	];
}

function collapseCrossLanguageBooks(books: ProcessedBook[]): ProcessedBook[] {
	const osisOrder = canonicalOsisOrder();
	const osisRank = new Map<string, number>();
	for (let i = 0; i < osisOrder.length; i += 1) {
		osisRank.set(osisOrder[i], i);
	}

	type TokenOwner = {
		osis: string[];
		sourceId: number;
		hasBefore: boolean;
		spec: { text: string; normalize?: "none" };
	};
	const tokenOwners = new Map<string, TokenOwner[]>();

	for (const book of books) {
		const osisList = Array.isArray(book.osis) ? book.osis : [book.osis];
		for (const spec of book.texts) {
			const key = `${spec.text}\u0000${spec.normalize ?? ""}`;
			const row = tokenOwners.get(key) ?? [];
			row.push({
				osis: osisList,
				sourceId: book.sourceId,
				hasBefore: book.hasBefore,
				spec
			});
			tokenOwners.set(key, row);
		}
	}

	type Bucket = {
		osis: string[];
		texts: Array<{ text: string; normalize?: "none" }>;
		sourceId: number;
		hasBefore: boolean;
	};
	const buckets = new Map<string, Bucket>();

	for (const owners of tokenOwners.values()) {
		const osisSource = new Map<string, number>();
		let hasBefore = false;
		let firstSource = Number.MAX_SAFE_INTEGER;
		const spec = owners[0].spec;
		for (const owner of owners) {
			hasBefore = hasBefore || owner.hasBefore;
			firstSource = Math.min(firstSource, owner.sourceId);
			for (const osis of owner.osis) {
				const current = osisSource.get(osis);
				if (current == null || owner.sourceId < current) {
					osisSource.set(osis, owner.sourceId);
				}
			}
		}
		const sortedOsis = [...osisSource.keys()].sort((a, b) => {
			const sourceA = osisSource.get(a) ?? Number.MAX_SAFE_INTEGER;
			const sourceB = osisSource.get(b) ?? Number.MAX_SAFE_INTEGER;
			if (sourceA !== sourceB) return sourceA - sourceB;
			const rankA = osisRank.get(a) ?? Number.MAX_SAFE_INTEGER;
			const rankB = osisRank.get(b) ?? Number.MAX_SAFE_INTEGER;
			if (rankA !== rankB) return rankA - rankB;
			return a.localeCompare(b);
		});
		const bucketKey = `${sortedOsis.join("|")}\u0000${spec.normalize ?? ""}`;
		const bucket = buckets.get(bucketKey);
		if (!bucket) {
			buckets.set(bucketKey, {
				osis: sortedOsis,
				texts: [spec],
				sourceId: firstSource,
				hasBefore
			});
		} else {
			bucket.sourceId = Math.min(bucket.sourceId, firstSource);
			bucket.hasBefore = bucket.hasBefore || hasBefore;
			bucket.texts.push(spec);
		}
	}

	const out: ProcessedBook[] = [...buckets.values()].map((bucket) => {
		const unique = new Map<string, { text: string; normalize?: "none" }>();
		for (const spec of bucket.texts) {
			unique.set(`${spec.text}\u0000${spec.normalize ?? ""}`, spec);
		}
		return {
			osis: bucket.osis,
			texts: [...unique.values()],
			groupKey: "",
			sourceId: bucket.sourceId,
			hasBefore: bucket.hasBefore
		};
	});
	return out;
}

const mergedBooks = mergeBooks(yamlData) as ProcessedBook[];
const processedBooks = buildArgs.cross && buildArgs.mergeMode === "smart"
	? collapseCrossLanguageBooks(mergedBooks)
	: mergedBooks;
const bookRegexps = buildBookRegexps(
	processedBooks,
	rawOptions,
	normalizeMode,
	replaceSpacesWith,
	buildArgs.cross
);

const { texts: translationTexts } = parseTranslationRows(translationRows);
const translationPattern = buildTranslationPattern(translationTexts, normalizeMode, replaceSpacesWith);
const translationsRegexps = translationPattern ? [new RegExp(`${translationPattern}\\b`, "gi")] : [];

async function loadTranslationSystems(): Promise<Record<string, any>> {
	const systems: Record<string, any> = {};
	const defaultPath = resolve(translationsDir, "default.yaml");
	const defaultSource = await readFile(defaultPath, "utf8");
	const defaultObj = parseTranslationSystemsYaml(defaultSource);
	if (defaultObj?.default) {
		systems.default = defaultObj.default;
	}

	const neededSystems = new Set<string>();
	for (const row of translationRows) {
		if (!row) continue;
		if (typeof row === "string") {
			const parts = row.split(",");
			const system = (parts[2] || "").trim();
			if (system) neededSystems.add(system);
			continue;
		}
		if (typeof row === "object") {
			const system = (row as { system?: string }).system?.trim();
			if (system) neededSystems.add(system);
		}
	}

	for (const system of neededSystems) {
		if (system === "default" || system === "current") continue;
		const systemPath = resolve(translationsDir, `${system}.yaml`);
		try {
			const systemSource = await readFile(systemPath, "utf8");
			const systemObj = parseTranslationSystemsYaml(systemSource);
			if (!systemObj || typeof systemObj !== "object" || !(system in systemObj)) {
				throw new Error(`Missing translation system "${system}" in ${systemPath}`);
			}
			Object.assign(systems, systemObj);
		} catch (err) {
			if ((err as NodeJS.ErrnoException)?.code === "ENOENT") {
				throw new Error(`Missing translation system file for "${system}" at ${systemPath}`);
			}
			throw err;
		}
	}

	return systems;
}

const translationSystems = await loadTranslationSystems();
const translationAliases = parseTranslationRows(translationRows).aliases;
const translationsClass = {
	aliases: {
		...translationAliases,
		current: { system: "current", osis: "" },
		default: { system: "default", osis: "" }
	},
	current_system: "default",
	systems: {
		current: {},
		...translationSystems
	}
};

const nextVariable = getVariable("next");
const nextPattern = nextVariable.length > 0
	? buildVariablePatternsForRegexp(
		expandVariableCharacters(nextVariable),
		normalizeMode,
		replaceSpacesWith,
		trailingDotsMode
	)
	: "";

function buildMatchEndSplitPattern() {
	const matchEndMode: "as_is" | "optional" = "as_is";
	const title = buildVariablePattern(
		expandVariableCharacters(getVariable("title")),
		normalizeMode,
		replaceSpacesWith,
		matchEndMode
	);
	const ff = buildVariablePatternsForRegexp(
		expandVariableCharacters(getVariable("ff")),
		normalizeMode,
		replaceSpacesWith,
		matchEndMode
	);
	const ab = buildVariablePatternsForRegexp(
		expandVariableCharacters(getVariable("ab")),
		normalizeMode,
		replaceSpacesWith,
		matchEndMode
	);
	const control = buildVariablePatternsForRegexp(
		expandVariableCharacters(getVariable("match_end_split_control")),
		normalizeMode,
		replaceSpacesWith,
		matchEndMode
	);
	const final = buildVariablePatternsForRegexp(
		expandVariableCharacters(getVariable("match_end_split_final")),
		normalizeMode,
		replaceSpacesWith,
		matchEndMode
	);
	const parts = [
		`\\d\\W*(?:${title})`,
	];
	if (nextPattern) {
		parts.push(`\\d\\W*(?:${nextPattern})(?:[\\s*]*\\.)?`);
	}
	parts.push(
		`\\d\\W*(?:${ff})(?:[\\s*]*\\.)?`,
		`\\d[\\s*]*(?:${ab})`,
		control,
		final
	);
	return parts.join("|");
}

function buildBookRegexpFromPattern(patternString: string): RegExp {
	const beforeChars = getOptionRegexp("before_book_allowed_characters");
	const afterChars = getOptionRegexp("after_book_allowed_characters");
	const beforeEveryBook = getOptionRegexp("before_every_book");
	const afterEveryBook = getOptionRegexp("after_every_book");
	const regexPattern = `(?:^|(?<=${beforeChars}))${beforeEveryBook}(${patternString})${afterEveryBook}(?:(?=${afterChars})|$)`;
	return new RegExp(regexPattern, "giu");
}

function buildOrdinalPsalmsRegexp(): RegExp | null {
	const ordinals = Array.isArray(yamlData.ordinals) ? yamlData.ordinals : [];
	let texts: string[] = [];
	let betweenRegexp = "\\s+";
	const ordinalSpecs: Array<{ numbers: number[]; after: string[] }> = [];
	let defaultAfter: string[] = [];

	for (const item of ordinals) {
		if (!isRecord(item)) continue;
		const textsRaw = item.texts;
		if (Array.isArray(textsRaw)) {
			texts = textsRaw.map((text) => String(text));
		}
		const between = item.between;
		if (isRecord(between) && typeof between.regexp === "string") {
			betweenRegexp = between.regexp;
		}
		const afterRaw = item.after;
		if (afterRaw != null) {
			const after = (Array.isArray(afterRaw) ? afterRaw : [afterRaw]).map((v) => String(v));
			const numbersRaw = item.numbers;
			if (numbersRaw != null) {
				const numbers = (Array.isArray(numbersRaw) ? numbersRaw : [numbersRaw]).map((v) => Number(v));
				ordinalSpecs.push({ numbers, after });
			} else {
				defaultAfter = after;
			}
		}
	}

	if (!texts.length || (ordinalSpecs.length === 0 && defaultAfter.length === 0)) return null;

	const numberSuffixes = new Map<number, string[]>();
	for (const spec of ordinalSpecs) {
		for (const num of spec.numbers) {
			numberSuffixes.set(num, spec.after);
		}
	}

	const digitRules = new Map<number, string[]>();
	for (const spec of ordinalSpecs) {
		const digits = new Set(spec.numbers.map((num) => Math.abs(num) % 10));
		if (digits.size !== 1) continue;
		const [digit] = digits;
		if (digit !== 1 && digit !== 2 && digit !== 3) continue;
		const teen = digit === 1 ? 11 : digit === 2 ? 12 : 13;
		if (spec.numbers.includes(teen)) continue;
		if (!digitRules.has(digit)) {
			digitRules.set(digit, spec.after);
		}
	}

	const ordinalStrings: string[] = [];
	for (let i = 1; i <= 151; i += 1) {
		let suffixes = numberSuffixes.get(i);
		if (!suffixes) {
			const mod100 = i % 100;
			const isTeen = mod100 === 11 || mod100 === 12 || mod100 === 13;
			const digitRule = !isTeen ? digitRules.get(i % 10) : undefined;
			suffixes = digitRule ?? defaultAfter;
		}
		if (!suffixes || suffixes.length === 0) continue;
		for (const suffix of suffixes) {
			ordinalStrings.push(`${i} ${suffix}`);
		}
	}
	if (ordinalStrings.length === 0) return null;

	const ordinalPattern = buildRecursive(ordinalStrings, 1, normalizeMode, replaceSpacesWith);
	const textPattern = buildRecursive(texts, 1, normalizeMode, replaceSpacesWith);
	const patternString = `${ordinalPattern}${betweenRegexp}${textPattern}`;
	return buildBookRegexpFromPattern(patternString);
}

function buildPassageComponentsPattern() {
	const parts: string[] = [];
	const add = (pattern: string) => {
		if (pattern) parts.push(pattern);
	};
	add(buildVariablePatternsForRegexp(
		expandVariableCharacters(getVariable("chapter")),
		normalizeMode,
		replaceSpacesWith,
		trailingDotsMode
	));
	add(buildVariablePatternsForRegexp(
		expandVariableCharacters(getVariable("verse")),
		normalizeMode,
		replaceSpacesWith,
		trailingDotsMode
	));
	add(buildVariablePatternsForRegexp(
		expandVariableCharacters(getVariable("ff")),
		normalizeMode,
		replaceSpacesWith,
		trailingDotsMode
	));
	if (nextPattern) {
		add(nextPattern);
	}
	add(buildVariablePatternsForRegexp(
		expandVariableCharacters(getVariable("and")),
		normalizeMode,
		replaceSpacesWith,
		trailingDotsMode
	));
	add(buildVariablePatternsForRegexp(
		expandVariableCharacters(getVariable("to")),
		normalizeMode,
		replaceSpacesWith,
		trailingDotsMode
	));
	if (parts.length === 0) return "";
	return `(?:${parts.join("|")})`;
}

function buildEscapedPassagePattern() {
	const prePassageAllowed = "[^\\x1e\\x1f\\p{L}\\p{N}]";
	const validCharacters = getOptionRegexp("after_book_allowed_characters");
	const title = buildVariablePattern(
		expandVariableCharacters(getVariable("title")),
		normalizeMode,
		replaceSpacesWith,
		trailingDotsMode
	);
	const ab = buildVariablePatternsForRegexp(
		expandVariableCharacters(getVariable("ab")),
		normalizeMode,
		replaceSpacesWith,
		trailingDotsMode
	);
	const passageComponents = buildPassageComponentsPattern();
	const pattern = String.raw`
	(?:^|${prePassageAllowed})
		(
			(?:
				  (?: ch (?: apters? | a?pts?\.? | a?p?s?\.? )? \s*
					\d+ \s* (?: [\u2013\u2014\-] | through | thru | to) \s* \d+ \s*
					(?: from | of | in ) (?: \s+ the \s+ book \s+ of )?\s* )
				| (?: ch (?: apters? | a?pts?\.? | a?p?s?\.? )? \s*
					\d+ \s*
					(?: from | of | in ) (?: \s+ the \s+ book \s+ of )?\s* )
				| (?: \d+ (?: th | nd | st ) \s*
					ch (?: apter | a?pt\.? | a?p?\.? )? \s*
					(?: from | of | in ) (?: \s+ the \s+ book \s+ of )? \s* )
			)?
			\x1f(\d+)(?:/\d+)?\x1f
				(?:
				    /\d+\x1f
				  | ${validCharacters}
				  | ${title} (?![a-z])
				  | ${passageComponents}
				  | ${ab} (?!\w)
				  | $
				 )+
		)
	`.replace(/\s+/g, "");
	return decodeAsciiHex(pattern);
}

const psOrdinalRegexp = buildOrdinalPsalmsRegexp();

const firstPattern = decodeAsciiHex(buildVariablePattern(
	expandVariableCharacters(getVariable("first")),
	normalizeMode,
	replaceSpacesWith,
	trailingDotsMode
));
const secondPattern = decodeAsciiHex(buildVariablePattern(
	expandVariableCharacters(getVariable("second")),
	normalizeMode,
	replaceSpacesWith,
	trailingDotsMode
));
const thirdPattern = decodeAsciiHex(buildVariablePattern(
	expandVariableCharacters(getVariable("third")),
	normalizeMode,
	replaceSpacesWith,
	trailingDotsMode
));
const andPattern = decodeAsciiHex(buildVariablePattern(
	expandVariableCharacters(getVariable("and")),
	normalizeMode,
	replaceSpacesWith,
	trailingDotsMode
));
const toPatternRegexp = decodeAsciiHex(buildVariablePattern(
	expandVariableCharacters(getVariable("to")),
	normalizeMode,
	replaceSpacesWith,
	trailingDotsMode
));

const regexClass = {
	languages: langs,
	translations: translationsRegexps,
	first: new RegExp(`${firstPattern}`),
	second: new RegExp(`${secondPattern}`),
	third: new RegExp(`${thirdPattern}`),
	range_and: new RegExp(
		`(?:[&\\u2013\\u2014-]|${andPattern}|${toPatternRegexp})`
	),
	range_only: new RegExp(
		`(?:[\\u2013\\u2014-]|${toPatternRegexp})`
	),
	match_end_split: new RegExp(decodeAsciiHex(buildMatchEndSplitPattern()), 'gi'),
	control: /[\x1e\x1f]/g,
	escaped_passage: new RegExp(buildEscapedPassagePattern(), 'giu'),
	pre_book: buildPreBook(getOptionRegexp("before_book_allowed_characters")),
	pre_number_book: buildPreNumberBook(getOptionRegexp("before_book_allowed_characters")),
	post_book: buildPostBook(getOptionRegexp("after_book_allowed_characters")),
	all_books: [
		{
			osis: ["Ps"],
			testament: "a",
			extra: "2",
			regexp: /\b(Ps151)(?=\.1\b)/g
		},
		...(() => {
			const ordered: any[] = [];
			for (const book of bookRegexps) {
				const osis = Array.isArray(book.osis) ? book.osis : [book.osis];
				if (osis.includes("Ps")) {
					if (psOrdinalRegexp) {
						ordered.push({
							osis: ["Ps"],
							testament: "oa",
							testament_books: { Ps: "oa" },
							extra: "1",
							regexp: psOrdinalRegexp
						});
					}
					ordered.push({
						osis: ["Ps"],
						testament: "oa",
						testament_books: { Ps: "oa" },
						regexp: book.regexp
					});
					continue;
				}
				ordered.push(book);
			}
			return ordered;
		})()
	]
};

type VariableItem = {
	text?: string;
	regexp?: string;
	regexp_after?: string;
	normalize?: "none" | "combining_characters";
};

function expandTrailingDotVariants(variable: string[] | VariableItem[]) {
	if (!variable || variable.length === 0) return variable;
	const items = normalizeVariableItems(variable);
	const out: VariableItem[] = [];
	for (const item of items) {
		out.push(item);
		if (item.text) {
			const value = String(item.text);
			if (value.endsWith(".")) {
				out.push({ ...item, text: value.slice(0, -1) });
			}
		}
	}
	return out;
}

function stripRegexpAfter(variable: string[] | VariableItem[]) {
	if (!variable || variable.length === 0) return variable;
	return normalizeVariableItems(variable).map((item) => {
		const { regexp_after, ...rest } = item;
		return rest;
	});
}

const grammarSpaces = { regexp: " ", replacement: "\\s+" };

function buildGrammarPattern(
	variable: string[] | VariableItem[],
	includeTrailingDotVariants = false,
	includeRegexpAfter = true
) {
	let normalized = variable;
	if (includeTrailingDotVariants) {
		normalized = expandTrailingDotVariants(normalized);
	}
	if (!includeRegexpAfter) {
		normalized = stripRegexpAfter(normalized);
	}
	return buildVariablePatternsForRegexp(
		expandVariableCharacters(normalized),
		normalizeMode,
		grammarSpaces,
		trailingDotsMode
	);
}

function decodeAsciiHex(pattern: string): string {
	return pattern.replace(/\\x([0-9a-fA-F]{2})/g, (match, hex) => {
		const code = Number.parseInt(hex, 16);
		const isDigit = code >= 0x30 && code <= 0x39;
		const isUpper = code >= 0x41 && code <= 0x5a;
		const isLower = code >= 0x61 && code <= 0x7a;
		if (isDigit || isUpper || isLower) {
			return String.fromCharCode(code);
		}
		return match;
	});
}

const andPatternBase = decodeAsciiHex(buildGrammarPattern(getVariable("and"), true));
const andPatternWithAmp = andPatternBase
	? `(?:${andPatternBase}|&)`
	: "&";
const chapterPattern = decodeAsciiHex(buildGrammarPattern(getVariable("chapter"), true) || "chapter");
const versePattern = decodeAsciiHex(buildGrammarPattern(getVariable("verse"), true) || "verse");
const ffPattern = decodeAsciiHex(buildGrammarPattern(getVariable("ff")) || "ff");
const titlePattern = decodeAsciiHex(buildGrammarPattern(getVariable("title")) || "title");
const toPattern = decodeAsciiHex(buildGrammarPattern(getVariable("to")) || "-");
const nextPatternGrammar = nextVariable.length > 0
	? decodeAsciiHex(buildGrammarPattern(nextVariable))
	: "\\x1f\\x1f\\x1f";
const abPatternRaw = decodeAsciiHex(
	buildVariablePatternsForRegexp(
		expandVariableCharacters(stripRegexpAfter(getVariable("ab"))),
		normalizeMode,
		grammarSpaces,
		"as_is"
	) || "[a-e]"
);

const grammarOptions = {
	ab: new RegExp(`^(?:${abPatternRaw})(?!\\p{L})`, "iu"),
	and: new RegExp(`^(?:${andPatternWithAmp})`, "i"),
	c_explicit: new RegExp(`^[\\s*]*(?:${chapterPattern})[\\s*]*`, "i"),
	c_sep_eu: /^\x1f\x1f\x1f/i,
	c_sep_us: /^\x1f\x1f\x1f/i,
	cv_sep_weak: /^(?:[\s*]*["'][\s*]*|[\s*])+/i,
	cv_sep_eu: /^[\s*]*,+[\s*]*/i,
	cv_sep_us: /^[\s*]*(?::+|\.(?!\s*\.\s*\.))[\s*]*/i,
	ff: new RegExp(`^[\\s*]*(?:${ffPattern})(?![\\p{L}\\p{N}])(?:\\.(?!\\s*\\.))?`, "iu"),
	in_book_of: /^[\s*]*(?:from|of|in)[\s*]*(?:the[\s*]*book[\s*]*of[\s*]*)?/i,
	next: new RegExp(`^(?:${nextPatternGrammar})`, "i"),
	ordinal: /^(?:th|st|nd|rd)/i,
	range: new RegExp(`^[\\s*]*(?:[\\-–—]|${toPattern})+[\\s*]*`, "i"),
	sequence_eu: new RegExp(
		`^(?:[;/:&\\-–—~\\s*]|\\.(?!\\s*\\.\\s*\\.)${andPatternBase ? `|${andPatternBase}` : ""})+`,
		"i"
	),
	sequence_us: new RegExp(
		`^(?:[,;/:&\\-–—~\\s*]|\\.(?!\\s*\\.\\s*\\.)${andPatternBase ? `|${andPatternBase}` : ""})+`,
		"i"
	),
	space: /^[\s*]+/,
	title: new RegExp(`^[\\s*]*(?:${titlePattern})(?!\\p{L})[\\s*]*`, "iu"),
	v_explicit: new RegExp(`^[\\s*]*(?:${versePattern})[\\s*]*(?!\\p{L})`, "iu")
};

//console.log("processedBooks", processedBooks);

function formatValue(value: any, indentLevel = 0): string {
	const indent = "  ".repeat(indentLevel);
	const nextIndent = "  ".repeat(indentLevel + 1);

	if (value instanceof RegExp) {
		return value.toString();
	}
	if (Array.isArray(value)) {
		if (value.length === 0) return "[]";
		const items = value.map((item) => formatValue(item, indentLevel + 1));
		if (items.every((item) => !item.includes("\n"))) {
			return `[${items.join(", ")}]`;
		}
		return `[\n${nextIndent}${items.join(`,\n${nextIndent}`)}\n${indent}]`;
	}
	if (typeof value === "object" && value !== null) {
		const entries = Object.entries(value);
		if (entries.length === 0) return "{}";
		const lines = entries.map(([key, val]) => {
			const safeKey = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key) ? key : JSON.stringify(key);
			return `${nextIndent}${safeKey}: ${formatValue(val, indentLevel + 1)}`;
		});
		if (entries.length <= 2 && lines.every((line) => !line.includes("\n"))) {
			const inlineLines = lines.map((line) => line.trim());
			return `{ ${inlineLines.join(", ")} }`;
		}
		return `{\n${lines.join(",\n")}\n${indent}}`;
	}
	if (typeof value === "string") {
		return JSON.stringify(value);
	}
	return String(value);
}

function formatClass(className: string, props: Record<string, any>, postInitLines: string[] = []): string {
	const lines: string[] = [];
	lines.push(`var ${className} = class {`);
	lines.push("  constructor() {");
	for (const [key, value] of Object.entries(props)) {
		const formatted = formatValue(value, 2);
		const formattedLines = formatted.split("\n");
		if (formattedLines.length === 1) {
			lines.push(`    this.${key} = ${formattedLines[0]};`);
		} else {
			lines.push(`    this.${key} = ${formattedLines[0]}`);
			for (let i = 1; i < formattedLines.length; i++) {
				lines.push(`    ${formattedLines[i]}`);
			}
			lines[lines.length - 1] = `${lines[lines.length - 1]};`;
		}
	}
	for (const line of postInitLines) {
		lines.push(`    ${line}`);
	}
	lines.push("  }");
	lines.push("};");
	return lines.join("\n");
}

const regexpsClassOutput = formatClass("bcv_regexps", {
	books: [],
	...regexClass
});
const translationsClassOutput = formatClass("bcv_translations", translationsClass, [
	"this.systems.current = structuredClone(this.systems.default);"
]);
const grammarOptionsOutput = `var bcv_grammar_options_default = ${formatValue(grammarOptions, 0)};\n`;
const bundleOutput = `var regexps = bcv_regexps;
var translations = bcv_translations;
var grammar_options = bcv_grammar_options_default;
export {
  grammar_options,
  regexps,
  translations
};`;

const allowOptionalSpaces = Boolean(replaceSpacesWith?.replacement?.includes("\\s*"));
const outputNormalizeWhitespace = (value: string) => value.replace(/\s+/gu, " ").trim();
const normalizeComposed = (value: string) => value.normalize("NFC");
const bookVariants = processedBooks.map((book) => {
	const seen = new Set<string>();
	const texts: string[] = [];
	for (const item of book.texts as Array<{ text: string; normalize?: "none" }>) {
		const base = outputNormalizeWhitespace(normalizeComposed(String(item.text)));
		if (seen.has(base)) continue;
		seen.add(base);
		texts.push(base);
	}
	return {
		osis: book.osis,
		texts
	};
});
const yamlOutput = YAML.stringify(bookVariants, { lineWidth: 0 });
const outputLang = buildArgs.outputLang;
const outputFileBase = langCodeToFileBase(outputLang);
const jsOutput = `${regexpsClassOutput}\n\n${translationsClassOutput}\n\n${grammarOptionsOutput}${bundleOutput}`;

await mkdir(namesDir, { recursive: true });
await mkdir(langOutputDir, { recursive: true });
await writeFile(resolve(namesDir, `${outputFileBase}.yaml`), yamlOutput, "utf8");
await writeFile(resolve(langOutputDir, `${outputFileBase}.js`), jsOutput, "utf8");
