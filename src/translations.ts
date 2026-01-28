import { parse as parseYaml } from "yaml";

type TranslationAliases = Record<string, { system: string; osis?: string }>;

type TranslationRow = string | { text?: string; osis?: string; system?: string };

type ParsedTranslations = {
	texts: string[];
	aliases: TranslationAliases;
};

function parseRow(row: TranslationRow): { text: string; osis?: string; system?: string } | null {
	if (typeof row === "string") {
		if (!row) return null;
		const parts = row.split(",");
		const text = (parts[0] || "").trim();
		if (!text) return null;
		const osis = (parts[1] || "").trim();
		const system = (parts[2] || "").trim();
		const out: { text: string; osis?: string; system?: string } = { text };
		if (osis) out.osis = osis;
		if (system) out.system = system;
		return out;
	}
	if (!row || !row.text) return null;
	return {
		text: row.text,
		osis: row.osis,
		system: row.system
	};
}

export function parseTranslationRows(rows: TranslationRow[] = []): ParsedTranslations {
	const texts: string[] = [];
	const aliases: TranslationAliases = {};

	for (const row of rows) {
		const parsed = parseRow(row);
		if (!parsed) continue;
		const text = parsed.text;
		const osis = (parsed.osis || "").trim();
		const system = (parsed.system || "").trim();

		texts.push(text);

		if (osis || system) {
			const key = text.toLowerCase();
			const alias: { system: string; osis?: string } = {
				system: system || "default"
			};
			if (osis) {
				alias.osis = osis;
			}
			aliases[key] = alias;
		}
	}

	return { texts, aliases };
}

export function parseTranslationSystemsYaml(source: string): Record<string, any> {
	const trimmed = source.trim();
	if (!trimmed) return {};
	return parseYaml(trimmed) ?? {};
}
