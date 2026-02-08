import { resolveLanguageCodeForDisk } from "./lang_code_utils";
type LangModule = Record<string, unknown>;

export async function load_language_code(langCode: string): Promise<LangModule> {
	if (typeof langCode !== "string" || langCode.length === 0) {
		throw new Error("Language code must be a non-empty lowercase ISO 639-3 code.");
	}
	if (!/^[a-z]{3}$/.test(langCode)) {
		throw new Error(`Language code must be exactly three lowercase letters: ${langCode}`);
	}
	const { langCode: normalizedCode, fileBase } = resolveLanguageCodeForDisk(langCode);
	const moduleUrl = new URL(`./lang/${fileBase}.js`, import.meta.url);
	try {
		return await import(moduleUrl.href);
	} catch (error) {
		const reason = error instanceof Error ? error.message : String(error);
		throw new Error(`Unable to load language "${normalizedCode}" from ${moduleUrl.pathname}: ${reason}`);
	}
}

export default load_language_code;
