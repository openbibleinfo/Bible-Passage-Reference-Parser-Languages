// src/lang_code_utils.ts
var RESERVED_THREE_LETTER_BASENAMES = /* @__PURE__ */ new Set(["con", "prn", "aux", "nul"]);
function langCodeToFileBase(langCode) {
  if (langCode.length !== 3) return langCode;
  return RESERVED_THREE_LETTER_BASENAMES.has(langCode) ? `${langCode}_` : langCode;
}
function resolveLanguageCodeForDisk(langCode) {
  return {
    langCode,
    fileBase: langCodeToFileBase(langCode)
  };
}

// src/loader.ts
async function load_language_code(langCode) {
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
var loader_default = load_language_code;
export {
  loader_default as default,
  load_language_code
};
