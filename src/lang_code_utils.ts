// Windows reserves these three-letter basenames even with extensions (e.g., con.yaml).
const RESERVED_THREE_LETTER_BASENAMES = new Set(["con", "prn", "aux", "nul"]);

export function langCodeToFileBase(langCode: string): string {
	if (langCode.length !== 3) return langCode;
	return RESERVED_THREE_LETTER_BASENAMES.has(langCode) ? `${langCode}_` : langCode;
}

export function fileBaseToLangCode(fileBase: string): string {
	if (!fileBase.endsWith("_")) return fileBase;
	const base = fileBase.slice(0, -1);
	if (base.length !== 3) return fileBase;
	return RESERVED_THREE_LETTER_BASENAMES.has(base.toLowerCase()) ? base : fileBase;
}

export function resolveLanguageCodeForDisk(langCode: string): { langCode: string; fileBase: string } {
	return {
		langCode,
		fileBase: langCodeToFileBase(langCode)
	};
}
