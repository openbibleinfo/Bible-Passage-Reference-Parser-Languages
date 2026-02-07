import { access } from "fs/promises";

type BuildArgs = {
	langs: string[];
	outputLang: string;
	cross: boolean;
	mergeMode: "smart" | "append";
};

export async function getLanguageArgs(langDir): Promise<BuildArgs> {
	const args: string[] = structuredClone(process.argv);
	args.shift();
	args.shift();

	const langs: string[] = [];
	const positional: string[] = [];
	let cross = false;
	let outputLang = "";
	let mergeMode: "smart" | "append" = "append";

	for (let i = 0; i < args.length; i += 1) {
		const arg = args[i];
		if (arg === "--cross") {
			cross = true;
			while (i + 1 < args.length && !String(args[i + 1]).startsWith("-")) {
				langs.push(String(args[i + 1]));
				i += 1;
			}
			continue;
		}
		if (arg === "--out" || arg === "-o") {
			outputLang = String(args[i + 1] ?? "");
			i += 1;
			continue;
		}
		if (arg === "--merge-mode") {
			const value = String(args[i + 1] ?? "");
			if (value !== "smart" && value !== "append") {
				throw new Error(`Invalid merge mode: ${value}. Expected "smart" or "append".`);
			}
			mergeMode = value;
			i += 1;
			continue;
		}
		if (arg.startsWith("-")) {
			throw new Error(`Unknown option: ${arg}`);
		}
		positional.push(arg);
	}

	if (!cross) {
		langs.push(...positional);
	}

	if (langs.length === 0) {
		throw new Error("Please add at least one language code as an argument. For example: `node build_lang.ts eng`.");
	}

	for (const lang of langs) {
		await doesFileExist(`${langDir}/${lang}.yaml`);
	}

	if (cross) {
		if (positional.length > 0) {
			throw new Error(`In cross mode, language codes must follow --cross. Unexpected positional args: ${positional.join(", ")}`);
		}
		if (!outputLang) {
			throw new Error('Cross-language builds require an output code: --out <code>');
		}
		if (outputLang.length === 3) {
			throw new Error(`Cross-language output code must not be 3 characters: ${outputLang}`);
		}
		if (!/^[a-zA-Z0-9_]+$/.test(outputLang)) {
			throw new Error(`Invalid output code: ${outputLang}`);
		}
		if (langs.length < 2) {
			throw new Error("Cross-language builds require at least two input languages.");
		}
	} else {
		outputLang = outputLang || langs[0];
	}

	return { langs, outputLang, cross, mergeMode };
}

async function doesFileExist(path) {
	try {
		await access(path);
	} catch {
		throw new Error(`${path} does not exist as a valid language file`);
	}
	return true;
}
