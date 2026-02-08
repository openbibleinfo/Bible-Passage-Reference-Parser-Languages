import { readFile } from "fs/promises";
import YAML from "yaml";
import { langCodeToFileBase } from "./lang_filenames";

type UnknownRecord = Record<string, unknown>;

type LanguageData = {
	variables?: UnknownRecord;
	ordinals?: unknown;
	options?: UnknownRecord;
	books?: unknown[];
	translations?: unknown[];
};

type MergedLanguageData = {
	variables: UnknownRecord;
	ordinals?: unknown;
	options: UnknownRecord;
	books: unknown[];
	translations?: unknown[];
};

type GetYamlDataOptions = {
	cross?: boolean;
};

function dedupeArrayItems<T>(items: T[]): T[] {
	const seen = new Set<string>();
	const out: T[] = [];
	for (const item of items) {
		const key = JSON.stringify(item);
		if (seen.has(key)) continue;
		seen.add(key);
		out.push(item);
	}
	return out;
}

function mergeVariables(base: UnknownRecord, incoming: UnknownRecord): void {
	for (const [key, incomingValue] of Object.entries(incoming)) {
		if (!(key in base)) {
			base[key] = incomingValue;
			continue;
		}
		const baseValue = base[key];
		if (Array.isArray(baseValue) && Array.isArray(incomingValue)) {
			base[key] = dedupeArrayItems([...baseValue, ...incomingValue]);
			continue;
		}
		base[key] = incomingValue;
	}
}

function mergeCrossOptions(base: UnknownRecord, incoming?: UnknownRecord): void {
	if (!incoming) return;
	const additiveKeys = new Set([
		"expand_characters",
		"alternate_straight_apostrophe_characters"
	]);
	for (const [key, incomingValue] of Object.entries(incoming)) {
		if (!additiveKeys.has(key)) {
			continue;
		}
		if (!Array.isArray(incomingValue)) {
			continue;
		}
		const current = Array.isArray(base[key]) ? (base[key] as unknown[]) : [];
		base[key] = dedupeArrayItems([...current, ...incomingValue]);
	}
}

export async function getYamlData(langs: string[], langDir: string, config: GetYamlDataOptions = {}): Promise<MergedLanguageData> {
	// Start with empty defaults
	let result: MergedLanguageData = {
		variables: {},
		options: {},
		books: [],
		translations: []
	};
	const isCross = Boolean(config.cross);

	// Load _defaults.yaml
	try {
		const defaultContent = await getFileContent(`${langDir}/_defaults.yaml`);
		const defaultData: LanguageData = YAML.parse(defaultContent);
		if (defaultData.variables) {
			result.variables = { ...defaultData.variables };
		}
		if (defaultData.options) {
			result.options = { ...defaultData.options };
		}
	} catch {
		throw new Error(`Error loading _defaults.yaml from ${langDir}/_defaults.yaml. This file is required.`);
	}

	// Process each language in order
	for (let i = 0; i < langs.length; i++) {
		const lang = langs[i];
		const fileContent = await getFileContent(`${langDir}/${langCodeToFileBase(lang)}.yaml`);
		const parsed = YAML.parse(fileContent) as unknown;
		const data: LanguageData = (parsed && typeof parsed === "object") ? (parsed as LanguageData) : {};
		
		if (i === 0) {
			// First language sets all variables and options
			if (data.variables) {
				result.variables = { ...result.variables, ...data.variables };
			}
			if (data.options) {
				result.options = { ...result.options, ...data.options };
			}
			if (data.ordinals) {
				result.ordinals = data.ordinals;
			}
			if (data.translations) {
				result.translations = data.translations;
			}
		} else if (isCross) {
			if (data.variables) {
				mergeVariables(result.variables, data.variables);
			}
			if (data.options) {
				mergeCrossOptions(result.options, data.options);
			}
			if (data.ordinals) {
				const current = Array.isArray(result.ordinals) ? result.ordinals : [];
				const incoming = Array.isArray(data.ordinals) ? data.ordinals : [];
				result.ordinals = dedupeArrayItems([...current, ...incoming]);
			}
			if (data.translations) {
				const current = Array.isArray(result.translations) ? result.translations : [];
				result.translations = dedupeArrayItems([...current, ...data.translations]);
			}
		}
		
		// Merge books from all languages
		if (data.books) {
			// Record current language's options for context
			const currentOptions = i === 0 ? 
				{ ...result.options, ...(data.options || {}) } : 
				result.options;
			
			result.books = [...result.books, { start_language: lang, options: currentOptions }, ...data.books];
		}
	}

	return result;
}

async function getFileContent(path: string): Promise<string> {
	try { 
		const content = await readFile(path, "utf8");
		return content;
	} catch {
		throw new Error(`Error reading ${path}`);
	}
}
