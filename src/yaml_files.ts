import { readFile } from "fs/promises";
import YAML from "yaml";

type LanguageData = {
	variables?: Record<string, any>;
	ordinals?: any;
	options?: Record<string, any>;
	books?: any[];
	translations?: any[];
}

type MergedLanguageData = {
	variables: Record<string, any>;
	ordinals?: any;
	options: Record<string, any>;
	books: any[];
	translations?: any[];
}

export async function getYamlData(langs: string[], langDir: string): Promise<MergedLanguageData> {
	// Start with empty defaults
	let result: MergedLanguageData = {
		variables: {},
		options: {},
		books: [],
		translations: []
	};

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
		const fileContent = await getFileContent(`${langDir}/${lang}.yaml`);
		const data: LanguageData = YAML.parse(fileContent);
		
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
