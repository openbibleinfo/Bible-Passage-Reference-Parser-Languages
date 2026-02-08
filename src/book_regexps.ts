import { buildRecursive } from "./regexps";

type ProcessedBook = {
	osis: string | string[];
	texts: TextSpec[];
	hasBefore: boolean;
	sourceId?: number;
};

type TextSpec = {
	text: string;
	normalize?: "none";
};

type BookRegexpObject = {
	osis: string[];
	testament: string;
	testament_books?: Record<string, string>;
	regexp: RegExp;
};

const testamentMap = makeValidOsises();

type ExpandCharacters = Record<string, string[]>;
type ExpandCharacterEntry = {
	character?: unknown;
	expand?: unknown;
};

function normalizeExpandCharacters(options: Record<string, unknown> | undefined): ExpandCharacters {
	const out: ExpandCharacters = {};
	if (!options) return out;

	const entries = Array.isArray(options.expand_characters)
		? (options.expand_characters as ExpandCharacterEntry[])
		: [];
	for (const entry of entries) {
		if (!entry || typeof entry !== "object") continue;
		const key = String(entry.character ?? "");
		const values = Array.isArray(entry.expand) ? entry.expand.map((v) => String(v)) : [];
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

export function buildBookRegexps(
	processedBooks: ProcessedBook[],
	options: Record<string, any> = {},
	normalize: "none" | "combining_characters" = "combining_characters",
	replaceSpacesWith: { regexp: string; replacement: string } | null = null,
	strictLiterals = false
): BookRegexpObject[] {
	const bookRegexps: BookRegexpObject[] = [];
	const expandCharacters = normalizeExpandCharacters(options);

	const orderedBooks = reorderNumberedBooks(processedBooks);
	
	for (const book of orderedBooks) {
		const normalNames: string[] = [];
		const noNormalizeNames: string[] = [];
		for (const spec of book.texts) {
			if (spec.normalize === "none") {
				noNormalizeNames.push(spec.text);
			} else {
				normalNames.push(spec.text);
			}
		}
	const expand = (names: string[]) => {
		if (Object.keys(expandCharacters).length === 0) return names;
		return expandCharacterVariants(names, expandCharacters);
	};
	const expandedNormal = expand(normalNames);
	const expandedNoNormalize = expand(noNormalizeNames);
	const namesArray = [...expandedNormal, ...expandedNoNormalize];
	const strictSpaces = replaceSpacesWith
		? {
			regexp: replaceSpacesWith.regexp,
			replacement: replaceSpacesWith.replacement.replace("\\s*", "\\s+")
		}
		: null;
		
		if (namesArray.length === 0) {
			const osisDisplay = Array.isArray(book.osis) ? book.osis.join(', ') : book.osis;
			console.warn(`Skipping book ${osisDisplay}: no texts found`);
			continue;
		}
		
		// Build recursive regexp pattern, moving names that get shadowed by shorter
		// prefixes to the front as a separate alternation.
		let patternString = "";
		if (strictLiterals) {
			patternString = buildLiteralAlternation(namesArray, replaceSpacesWith);
		} else {
			const parts: string[] = [];
			if (expandedNoNormalize.length > 0) {
				parts.push(buildBookPattern(expandedNoNormalize, options, "none", strictSpaces));
			}
			if (expandedNormal.length > 0) {
				parts.push(buildBookPattern(expandedNormal, options, normalize, replaceSpacesWith));
			}
			if (parts.length === 1) {
				patternString = parts[0];
			} else {
				patternString = `(?:${parts.join("|")})`;
			}
			const shadowed = findShadowedNames(namesArray, patternString, options.after_book_allowed_characters?.regexp);
			if (shadowed.length > 0 && shadowed.length < namesArray.length) {
				const literal = buildLiteralAlternation(shadowed, replaceSpacesWith);
				patternString = `(?:${literal}|${patternString})`;
			}
		}
		
		// Determine testament(s) and create testament_books if needed
		const osisArray = Array.isArray(book.osis) ? book.osis : [book.osis];
		const testaments = new Set<string>();
		const testamentBooks: Record<string, string> = {};
		
		for (const osis of osisArray) {
			const testament = testamentMap[osis] || "o"; // Default to Old Testament if unknown
			testaments.add(testament);
			testamentBooks[osis] = testament;
		}
		
		// Create testament string by sorting and joining unique testaments
		const testamentString = Array.from(testaments).sort().join("");
		
		// Create regexp with appropriate flags and anchoring based on options
		const beforeChars = options.before_book_allowed_characters.regexp;
		const afterChars = options.after_book_allowed_characters.regexp;
		const beforeEveryBook = options.before_every_book.regexp;
		const afterEveryBook = options.after_every_book.regexp;
		const isNumberedOsis = osisArray.some((osis) => /^\d/.test(osis));
		const preBookPattern = buildPreBookPattern(beforeChars, isNumberedOsis);
		
		const regexPattern = `${preBookPattern}${beforeEveryBook}(${patternString})${afterEveryBook}(?:(?=${afterChars})|$)`;
		const regexp = new RegExp(regexPattern, "giu");
		
		const regexpObject: BookRegexpObject = {
			osis: osisArray,
			testament: testamentString,
			regexp
		};
		
		// Only add testament_books if there are multiple testaments
		if (testaments.size > 1) {
			regexpObject.testament_books = testamentBooks;
		}
		
		bookRegexps.push(regexpObject);
	}
	
	return bookRegexps;
}

function expandCharacterVariants(names: string[], expandCharacters: ExpandCharacters): string[] {
	const out = new Set<string>();
	const keys = Object.keys(expandCharacters);
	for (const name of names) {
		if (keys.length === 0) {
			out.add(name);
			continue;
		}
		let variants: string[] = [""];
		for (const ch of name) {
			const alternates = expandCharacters[ch];
			const next: string[] = [];
			if (alternates && alternates.length > 0) {
				for (const v of variants) {
					for (const alt of alternates) {
						next.push(v + alt);
					}
				}
			} else {
				for (const v of variants) next.push(v + ch);
			}
			variants = next;
		}
		for (const v of variants) out.add(v);
	}
	return [...out];
}

function buildLiteralAlternation(
	names: string[],
	replaceSpacesWith: { regexp: string; replacement: string } | null
): string {
	const escaped = names
		.slice()
		.sort((a, b) => b.length - a.length)
		.map((name) => escapeBookLiteral(name, replaceSpacesWith));
	return escaped.length === 1 ? escaped[0] : `(?:${escaped.join("|")})`;
}

function escapeBookLiteral(
	text: string,
	replaceSpacesWith: { regexp: string; replacement: string } | null
): string {
	const escapeRegex = (value: string): string => value.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
	let out = "";
	for (const ch of text) {
		if (ch === " " && replaceSpacesWith) {
			out += replaceSpacesWith.replacement;
		} else {
			out += escapeRegex(ch);
		}
	}
	return out;
}

function buildBookPattern(
	names: string[],
	options: Record<string, any>,
	normalize: "none" | "combining_characters",
	replaceSpacesWith: { regexp: string; replacement: string } | null
): string {
	const patternString = buildRecursive(names, 1, normalize, replaceSpacesWith);
	const bad = findShadowedNames(names, patternString, options.after_book_allowed_characters?.regexp);
	if (bad.length === 0 || bad.length === names.length) {
		return patternString;
	}
	const good = names.filter((name) => !bad.includes(name));
	return `(?:${buildLiteralAlternation(bad, replaceSpacesWith)}|${buildBookPattern(good, options, normalize, replaceSpacesWith)})`;
}

function findShadowedNames(
	names: string[],
	patternString: string,
	afterCharsPattern?: string
): string[] {
	if (!afterCharsPattern) return [];
	let afterChars: RegExp | null = null;
	try {
		afterChars = new RegExp(afterCharsPattern, "u");
	} catch {
		return [];
	}
	const bad = new Set<string>();
	const candidates = [" ", "-", "–", "—", ".", ":", ";", "/", "؟"];
	const suffixes = candidates.filter((ch) => afterChars!.test(ch));
	const testRegexp = new RegExp(`^(${patternString})(?:(?=${afterCharsPattern})|$)`, "iu");
	for (const name of names) {
		let matchedFull = false;
		const trySuffixes = suffixes.length > 0 ? suffixes : [" "];
		for (const suffix of trySuffixes) {
			const testStr = `${name}${suffix}`;
			const match = testRegexp.exec(testStr);
			if (match && match[1] === name) {
				matchedFull = true;
				break;
			}
		}
		if (!matchedFull) bad.add(name);
	}
	return [...bad];
}

function buildPreBookPattern(beforeChars: string, usePreNumberBook: boolean): string {
	if (!usePreNumberBook) return `(?:^|(?<=${beforeChars}))`;
	const needsLookbehind = /\p\{L\}/.test(beforeChars);
	const expanded = expandNegatedCharClass(beforeChars, needsLookbehind);
	const lookbehind = needsLookbehind ? `(?<!\\d:(?=\\d))` : "";
	return `(?:^|(?<=${expanded})${lookbehind})`;
}

function expandNegatedCharClass(base: string, useUnicodeNumbers: boolean): string {
	const match = base.match(/^\[\^([^\]]+)\]$/);
	if (!match) return base;
	const chars = match[1];
	if (useUnicodeNumbers && chars.includes("\\p{N}")) return base;
	if (!useUnicodeNumbers && chars.includes("0-9")) return base;
	const numberClass = useUnicodeNumbers ? "\\p{N}" : "0-9";
	return `[^${chars}${numberClass}]`;
}

function reorderNumberedBooks(books: ProcessedBook[]): ProcessedBook[] {
	const entries = books.map((book, index) => {
		const osisArray = Array.isArray(book.osis) ? book.osis : [book.osis];
		const baseKeys = osisArray.map((osis) => osis.replace(/^\d+/, ""));
		const textValues = book.texts.map((spec) => spec.text);
		const textSet = new Set(textValues);
		const maxTextLength = textValues.reduce((max, text) => Math.max(max, text.length), 0);
		return {
			book,
			index,
			osisArray,
			baseKeys,
			hasNumberedOsis: osisArray.some((osis) => /^\d/.test(osis)),
			texts: textValues,
			textSet,
			sourceId: book.sourceId,
			maxTextLength
		};
	});

	entries.sort((a, b) => {
		if (a.sourceId !== b.sourceId) {
			return a.index - b.index;
		}
		if (a.sourceId === b.sourceId && a.book.hasBefore !== b.book.hasBefore) {
			return a.book.hasBefore ? -1 : 1;
		}
		const sharesText = a.textSet && b.textSet && a.texts.some((text) => b.textSet.has(text));
		if (sharesText && a.maxTextLength !== b.maxTextLength) {
			return b.maxTextLength - a.maxTextLength;
		}
		const sharesBaseKey = a.baseKeys.some((key) => b.baseKeys.includes(key));
		const sameOsisList = a.osisArray.join("|") === b.osisArray.join("|");
		if (sameOsisList && a.book.hasBefore !== b.book.hasBefore) {
			return a.book.hasBefore ? -1 : 1;
		}
		if (sharesBaseKey && a.book.hasBefore !== b.book.hasBefore) {
			return a.book.hasBefore ? -1 : 1;
		}
		if (sharesText && a.hasNumberedOsis !== b.hasNumberedOsis) {
			return a.hasNumberedOsis ? -1 : 1;
		}
		if (a.hasNumberedOsis !== b.hasNumberedOsis) {
			const aBefore = a.hasNumberedOsis && a.baseKeys.some((key) => b.osisArray.includes(key));
			const bBefore = b.hasNumberedOsis && b.baseKeys.some((key) => a.osisArray.includes(key));
			if (aBefore || bBefore) return aBefore ? -1 : 1;
		}
		return a.index - b.index;
	});

	return entries.map((entry) => entry.book);
}

// Create testament map
function makeValidOsises(): Record<string, string> {
	const validOsises = [
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
	
	const out: Record<string, string> = {};
	let type = 'o';
	
	for (const osis of validOsises) {
		if (osis === 'Matt') type = 'n';
		if (osis === 'Tob') type = 'a';
		out[osis] = type;
	}
	
	return out;
}
