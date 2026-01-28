import { access } from "fs/promises";

export async function getLanguageArgs(langDir): string[] {
	const args: string[] = structuredClone(process.argv);
	args.shift();
	args.shift();
	const langs: string[] = [];
	for (const arg of args) {
		const fileExists = await doesFileExist(`${langDir}/${arg}.yaml`);
		langs.push(arg);
	}
	if (langs.length === 0) {
		throw new Error("Please add at least one language code as an argument. For example: `node build_lang.ts eng`")
	}
	return langs;
}

async function doesFileExist(path) {
	try {
		await access(path);
	} catch {
		throw new Error(`${path} does not exist as a valid language file`);
	}
	return true;
}