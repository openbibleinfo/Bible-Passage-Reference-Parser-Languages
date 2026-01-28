import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const { RegExpBuilder } = require("@pemistahl/grex");
const maxRecurseLevel = 5;
type NormalizeMode = "none" | "combining_characters";
type ReplaceSpacesWith = { regexp: string; replacement: string } | null;
const spacePlaceholder = "\u0000";

function expandNormalizedStrings(strings: string[], normalize: NormalizeMode): string[] {
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
				if (next.length > maxVariants) return [];
			}
		}
		variants = next;
	}
	return variants;
}

function applyReplaceSpaces(strings: string[], replaceSpacesWith: ReplaceSpacesWith): string[] {
	if (!replaceSpacesWith) return strings;
	const matcher = new RegExp(replaceSpacesWith.regexp, "gu");
	return strings.map((str) => str.replace(matcher, spacePlaceholder));
}

function replacePlaceholderInPattern(pattern: string, replaceSpacesWith: ReplaceSpacesWith): string {
	if (!replaceSpacesWith) return pattern;
	const replacement = replaceSpacesWith.replacement;
	let out = pattern.replace(/\\x00/g, replacement);
	out = out.replace(/\x00/g, replacement);
	return out;
}

function unescapeHyphenOutsideCharClass(pattern: string): string {
	let out = "";
	let inClass = false;
	let escaped = false;
	for (let i = 0; i < pattern.length; i++) {
		const ch = pattern[i];
		if (escaped) {
			if (ch === "-" && !inClass) {
				out += "-";
			} else {
				out += `\\${ch}`;
			}
			escaped = false;
			continue;
		}
		if (ch === "\\") {
			escaped = true;
			continue;
		}
		if (ch === "[" && !inClass) {
			inClass = true;
			out += ch;
			continue;
		}
		if (ch === "]" && inClass) {
			inClass = false;
			out += ch;
			continue;
		}
		out += ch;
	}
	if (escaped) {
		out += "\\";
	}
	return out;
}

function normalizePattern(pattern: string, replaceSpacesWith: ReplaceSpacesWith): string {
	return unescapeHyphenOutsideCharClass(replacePlaceholderInPattern(pattern, replaceSpacesWith));
}

export function buildRecursive(
	strings: string[],
	level = 1,
	normalize: NormalizeMode = "combining_characters",
	replaceSpacesWith: ReplaceSpacesWith = null
): string {
	if (level > maxRecurseLevel) {
		throw new Error(`Maximum recursion level (${maxRecurseLevel}) exceeded while building regexp pattern`);
	}
	
	// Build pattern from strings with " 1" suffix for realistic testing
	const normalizedStrings = expandNormalizedStrings(strings, normalize);
	const patternStrings = applyReplaceSpaces(normalizedStrings, replaceSpacesWith);
	const testStrings = normalizedStrings;
	const pattern = buildPattern(patternStrings, replaceSpacesWith);
	
	// Test each string against the pattern
	const failures: string[] = [];
	const fullMatchRegexp = new RegExp(`^${pattern}$`);
	
	for (let i = 0; i < normalizedStrings.length; i++) {
		if (!fullMatchRegexp.test(testStrings[i])) {
			failures.push(normalizedStrings[i]); // Add original string to failures, not test string
		}
	}
	
	// If no failures, return the original pattern
	if (failures.length === 0) {
		return pattern;
	}
	
	if (process.env.GREX_DEBUG) {
		console.log(`Level ${level}: ${failures.length} failures out of ${normalizedStrings.length} strings`);
	}
	
	// Recursively build pattern for failures
	const failurePattern = buildRecursive(failures, level + 1, normalize, replaceSpacesWith);
	
	// Combine patterns: failures first, then original pattern
	const combinedSource = `${failurePattern}|${pattern}`;
	
	// Final validation: test all original strings against combined pattern
	const finalTestStrings = normalizedStrings;
	const finalFullMatchRegexp = new RegExp(`^${combinedSource}$`);
	const finalFailures: string[] = [];
	
	for (let i = 0; i < normalizedStrings.length; i++) {
		if (!finalFullMatchRegexp.test(finalTestStrings[i])) {
			finalFailures.push(normalizedStrings[i]);
		}
	}
	
	if (finalFailures.length > 0) {
		throw new Error(`Final validation failed for ${finalFailures.length} strings: ${finalFailures.slice(0, 5).join(', ')}${finalFailures.length > 5 ? '...' : ''}`);
	}
	
	return combinedSource;
}

function buildPattern(strings: string[], replaceSpacesWith: ReplaceSpacesWith): string {
	if (strings.length === 0) {
		throw new Error("Cannot build pattern from empty string array");
	}
	
	const pattern = RegExpBuilder.from(strings).withMinimumSubstringLength(3).withoutAnchors().build();
	return normalizePattern(pattern, replaceSpacesWith);
}

type VariableItem = {text?: string, regexp?: string, regexp_after?: string, normalize?: NormalizeMode};

function normalizeVariableItems(variable: string[] | VariableItem[]): VariableItem[] {
	return (variable as (string | VariableItem)[]).map((item) => {
		if (typeof item === "string") {
			return { text: item };
		}
		return item;
	});
}

type TrailingDotsMode = "optional" | "as_is";

function applyTrailingDotsMode(items: VariableItem[], mode: TrailingDotsMode): VariableItem[] {
	if (mode !== "optional") return items;
	return items.map((item) => {
		if (!item.text || item.regexp) return item;
		let text = item.text;
		if (text.endsWith(".") && text.length > 1) {
			text = text.slice(0, -1);
		}
		const suffix = "\\.?\\s*";
		const regexp_after = item.regexp_after ? `${suffix}${item.regexp_after}` : suffix;
		return { ...item, text, regexp_after };
	});
}

export function buildVariablePattern(
	variable: string[] | VariableItem[],
	normalize: NormalizeMode = "combining_characters",
	replaceSpacesWith: ReplaceSpacesWith = null,
	trailingDotsMode: TrailingDotsMode = "as_is"
): string {
	if (!variable || variable.length === 0) return "";

	const complexItems = applyTrailingDotsMode(normalizeVariableItems(variable), trailingDotsMode);
	
	// Separate text items (need RegExpBuilder) from regexp items (already patterns)
	const textItems = complexItems.filter(item => item.text && !item.regexp).map(item => item.text!);
	const regexpItems = complexItems.filter(item => item.regexp).map(item => {
		const content = item.regexp!;
		return item.regexp_after ? `${content}${item.regexp_after}` : content;
	});
	const textItemsWithRegexpAfter = complexItems.filter(item => item.text && !item.regexp && item.regexp_after).flatMap(item => {
		const mode = item.normalize === "none" ? "none" : normalize;
		const texts = applyReplaceSpaces(expandNormalizedStrings([item.text!], mode), replaceSpacesWith);
		return texts.map(text => `${RegExp.escape(text)}${item.regexp_after}`);
	});
	
	let pattern: string;
	const allParts = [];
	
	if (textItems.length > 0) {
		// Build pattern for text items without regexp_after
		const textOnlyItems = complexItems.filter(item => item.text && !item.regexp && !item.regexp_after);
		if (textOnlyItems.length > 0) {
			const textValues = textOnlyItems.flatMap(item => {
				const mode = item.normalize === "none" ? "none" : normalize;
				return applyReplaceSpaces(expandNormalizedStrings([item.text!], mode), replaceSpacesWith);
			});
			const textPattern = RegExpBuilder.from(textValues).withMinimumSubstringLength(3).withoutAnchors().build();
			allParts.push(unescapeHyphenOutsideCharClass(textPattern));
		}
	}
	
	// Add text items with regexp_after
	allParts.push(...textItemsWithRegexpAfter);
	
	// Add regexp items (already processed above)
	allParts.push(...regexpItems);
	
	if (allParts.length === 1) {
		pattern = allParts[0];
	} else if (allParts.length > 1) {
		pattern = `(?:${allParts.join('|')})`;
	} else {
		pattern = '';
	}
	
	return normalizePattern(pattern, replaceSpacesWith);
}

export function buildVariablePatternsForRegexp(
	variable: string[] | VariableItem[],
	normalize: NormalizeMode = "combining_characters",
	replaceSpacesWith: ReplaceSpacesWith = null,
	trailingDotsMode: TrailingDotsMode = "as_is"
): string {
	if (!variable || variable.length === 0) return "";

	const complexItems = applyTrailingDotsMode(normalizeVariableItems(variable), trailingDotsMode);
	
	// Check if all items have the same regexp_after
	const firstRegexpAfter = complexItems[0].regexp_after;
	const allSameRegexpAfter = complexItems.every(item => item.regexp_after === firstRegexpAfter);
	
	if (allSameRegexpAfter && firstRegexpAfter) {
		// Separate text items (need RegExpBuilder) from regexp items (already patterns)
		const textItems = complexItems.filter(item => item.text && !item.regexp).map(item => item.text!);
		const regexpItems = complexItems.filter(item => item.regexp).map(item => item.regexp!);
		
		let basePattern: string;
		if (textItems.length > 0 && regexpItems.length > 0) {
			// Mix of text and regexp - build pattern for text items, then combine
			const textValues = complexItems
				.filter(item => item.text && !item.regexp)
				.flatMap(item => {
					const mode = item.normalize === "none" ? "none" : normalize;
					return applyReplaceSpaces(expandNormalizedStrings([item.text!], mode), replaceSpacesWith);
				});
			const textPattern = RegExpBuilder.from(textValues).withMinimumSubstringLength(1).withoutAnchors().build();
			basePattern = `(?:${unescapeHyphenOutsideCharClass(textPattern)}|${regexpItems.join('|')})`;
		} else if (textItems.length > 0) {
			// Only text items - use RegExpBuilder
			const textValues = complexItems
				.filter(item => item.text && !item.regexp)
				.flatMap(item => {
					const mode = item.normalize === "none" ? "none" : normalize;
					return applyReplaceSpaces(expandNormalizedStrings([item.text!], mode), replaceSpacesWith);
				});
			basePattern = unescapeHyphenOutsideCharClass(
				RegExpBuilder.from(textValues).withMinimumSubstringLength(1).withoutAnchors().build()
			);
		} else {
			// Only regexp items - combine directly
			basePattern = regexpItems.length === 1 ? regexpItems[0] : `(?:${regexpItems.join('|')})`;
		}
		
		return normalizePattern(`(?:${basePattern}${firstRegexpAfter})`, replaceSpacesWith);
	}
	
	// Different regexp_after values - build alternation pattern manually
	const parts = complexItems.flatMap(item => {
		if (item.regexp) {
			const content = item.regexp;
			return item.regexp_after ? [`${content}${item.regexp_after}`] : [content];
		}
		const mode = item.normalize === "none" ? "none" : normalize;
		const texts = applyReplaceSpaces(expandNormalizedStrings([item.text || ""], mode), replaceSpacesWith);
		return texts.map(text => {
			const content = RegExp.escape(text);
			return item.regexp_after ? `${content}${item.regexp_after}` : content;
		});
	});
	
	if (parts.length === 1) {
		return normalizePattern(parts[0], replaceSpacesWith);
	}
	
	return normalizePattern(`(?:${parts.join('|')})`, replaceSpacesWith);
}

export function buildTranslationPattern(
	strings: string[],
	normalize: NormalizeMode = "combining_characters",
	replaceSpacesWith: ReplaceSpacesWith = null
): string {
	if (!strings || strings.length === 0) return "";
	const values = applyReplaceSpaces(expandNormalizedStrings(strings, normalize), replaceSpacesWith);
	const pattern = RegExpBuilder.from(values).withMinimumSubstringLength(1).withoutAnchors().build();
	return normalizePattern(pattern, replaceSpacesWith);
}
