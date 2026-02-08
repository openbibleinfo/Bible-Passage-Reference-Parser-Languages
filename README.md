# Language Data for the Bible Passage Reference Parser

The code in this repository is mostly AI-generated, though the source data is not.

This repository contains the YAML to Javascript build pipeline for [Bible Passage Reference Parser](https://github.com/openbibleinfo/Bible-Passage-Reference-Parser) language data.

## Structure
- `data/_defaults.yaml`: shared defaults for variables/options.
- `data/*.yaml`: per-language data (ISO 639-3 codes like `eng`, `zho`).
- `translation_systems/*.yaml`: versification systems and translation aliases.
- `src/`: TypeScript source for building language output.
- `bin/compile.sh`: bundles TypeScript CLI tools in `src/` to `bin/*.js`.
- `bin/build_spec.js`: builds localized-book Jasmine specs from `book_names/all/`.
- `bin/build_all_langs.js`: builds all languages in parallel and runs specs for each language.
- `lang/`: generated output files (optional; regenerate as needed).
- `book_names/all/`: generated book-name lists used to build tests.
- `book_names/preferred/`: preferred display names (default + optional translation overrides).
- `test/`: generated localized-book specs.

## Quick start
```
npm install
bin/compile.sh
node bin/build_lang.js eng
```
Build a cross-language parser:
```
node bin/build_lang.js --cross eng spa --out eng_spa
node bin/build_spec.js eng_spa
```
Generate specs:
```
node bin/build_spec.js        # all languages
node bin/build_spec.js eng    # single language
```
Build all languages:
```

Cross-language options:
- `--cross`: enable cross-language build mode.
- `--out <code>`: output language code (must not be 3 characters).
- `--merge-mode append|smart`: book merge mode (default `append`).
node bin/build_all_langs.js          # parallel build + specs + tests
node bin/build_all_langs.js -j 4     # set worker count
node bin/build_all_langs.js --test-only   # skip lang rebuild, build specs + run tests
```

## Output format

The build outputs three JS classes:
- `bcv_regexps`
- `bcv_translations`
- `bcv_grammar_options_default`

The output matches the expected format in Bible-Passage-Reference-Parser.

## Creating a new language YAML

1) Pick an existing language as a starting point (for example `data/eng.yaml`) and copy it to a new ISO 639-3 code, like `data/isl.yaml`.
2) Update the language file contents:
   - `variables`: text tokens and patterns used by the parser (titles, next, ff, etc.).
   - `options`: language-specific parsing options; any missing options fall back to `data/_defaults.yaml`.
   - `books`: list of Bible book names/abbreviations and regex-related data for the language.
   - `ordinals` and `translations` are optional; include them if needed for the language.
3) Build and verify:
```
bin/compile.sh
node bin/build_lang.js isl
```

Notes for new languages:
- The first language file passed to `build_lang` sets the primary `variables` and `options`; additional languages are only used to merge `books`.
- `data/_defaults.yaml` provides required defaults for `variables` and `options`, so you only need to override what differs.

## YAML structure (`data/*.yaml`)

### variables

Used to build the core grammar and separator patterns. Values can be:
- simple strings: `- "cap."`
- objects for fine control:
  - `text`: string value
  - `regexp`: raw regex (no escaping)
  - `regexp_after`: appended raw regex after the text/regexp
  - `normalize: none` to skip combining-character normalization for that item

Example:
```yaml
variables:
  and:
    - text: a
      regexp_after: (?!\p{L})
    - vedi
  to:
    - "-"
    - "a"
```

### options

Common options (see `data/_defaults.yaml` for full list):
- `normalize`: `combining_characters` (default) or `none`
- `trailing_dots_in_variables`: `optional` or `as_is`
- `expand_characters`: array of `{ character, expand: [ ... ] }` to allow alternates anywhere that character appears in book names or variables. Example:
  ```yaml
  expand_characters:
    - character: "'"
      expand: ["'", "’"]
  ```
- `replace_characters_with`: `{ regexp, replacement }` (default converts spaces to `\s*`)
- `before_book_allowed_characters`, `after_book_allowed_characters`: regex character classes used to enforce valid boundaries before/after a matched book name.
- `before_every_book`, `after_every_book`: regex patterns inserted immediately before/after every book match. Use these to add language-specific required prefixes/suffixes around **all** books (rare). These are applied in addition to the before/after allowed character boundaries.
- `join_before`, `join_after`: default join strings used when expanding `before`/`after` book patterns (for example the default space between an ordinal and the book name). Override to control whether the joiner is a space, empty string, punctuation, etc.

### books

Each entry declares OSIS code(s) and the localized texts. Forms:
- `osis: "Gen"` or `osis: ["Jonah","Job"]`
- `osis` objects with `before`, `after`, `join` for numbered books:
  ```yaml
  - osis:
      - osis: 1Sam
        before: *first
      - osis: 2Sam
        before: *second
    texts:
      - Samuel
  ```
- `texts` can be strings or objects with `text` and optional `normalize: none`, which prevents diacritics and spacing from changing.

### ordinals

Defines ordinal suffixes and optional Psalm handling:
```yaml
ordinals:
  - after: ["st"]
    numbers: [1, 21, 31]
  - after: ["nd"]
    numbers: [2, 22, 32]
  - between:
      regexp: \s*
    texts: ["Psalm"]
```

## book_names/all

`node bin/build_lang.js <lang>` writes `book_names/all/<lang>.yaml`, which is a normalized list of book texts used by `bin/build_spec.js`.
Names output collapses whitespace to single spaces and normalizes to NFC (combining-character variants are unified), but does not add extra variants.

## book_names/preferred

`book_names/preferred/<lang>.yaml` documents preferred book names for display and UI. Each file has:
- `default`: preferred names by OSIS code.
- `translations` (optional): translation-specific overrides (currently only in `eng.yaml`).

Example (`book_names/preferred/eng.yaml`):
```yaml
default:
  Gen:
    long: Genesis
    short: Gen
    shorter: Ge
  Ps:
    long: Psalms
    long_single: Psalm
    short: Ps
    shorter: Ps
translations:
  niv:
    Ps:
      short_plural: Pss
    1Sam:
      shorter: 1Sa
```

Keys used in preferred names can include:
- `long`: full name
- `long_single`: singular form (e.g., Psalm vs Psalms)
- `short`: common short form
- `shorter`: shortest form
- `short_plural`: translation-specific plural short form

### tests

Optional per-language Jasmine tests can be added to `data/<lang>.yaml` (see pol.yaml for an example):
```yaml
tests:
  - text: "Rdz 1:1"
    osis: "Gen.1.1"
  - it: "should handle odd spacing"
    text: "Rdz   1:1"
    osis: "Gen.1.1"
```
`bin/build_spec.js` will emit these into `test/<lang>.spec.js`. Entries with `it` get their own `it(<label>)` block; entries without `it` are grouped under `it("should handle custom tests")`.

## Notes

- `lang/` can be regenerated at any time; it is not a source of truth.
- Language codes are ISO 639-3 (e.g., `eng`, `zho`).
- Windows-reserved 3-letter basenames (`con`, `prn`, `aux`, `nul`) are stored on disk with a trailing underscore (for example, logical code `con` maps to `con_.yaml` / `con_.js` / `con_.spec.js`).

## ISO 639-2 to ISO 639-3 mapping

Mappings used by tooling and for compatibility with the older abbreviations used in Bible Passage Reference Parser:

| ISO 639-2 | ISO 639-3 | English name |
| --- | --- | --- |
| ar | ara | Arabic |
| bg | bul | Bulgarian |
| cs | ces | Czech |
| cy | cym | Welsh |
| da | dan | Danish |
| de | deu | German |
| el | grc | Greek |
| en | eng | English |
| es | spa | Spanish |
| fa | fas | Persian |
| fi | fin | Finnish |
| fr | fra | French |
| he | heb | Hebrew |
| hi | hin | Hindi |
| hr | hrv | Croatian |
| ht | hat | Haitian Creole |
| hu | hun | Hungarian |
| id | ind | Indonesian |
| is | isl | Icelandic |
| it | ita | Italian |
| ja | jpn | Japanese |
| jv | jav | Javanese |
| kn | kan | Kannada |
| ko | kor | Korean |
| la | lat | Latin |
| lg | lug | Ganda |
| mk | mkd | Macedonian |
| mr | mar | Marathi |
| ne | nep | Nepali |
| nl | nld | Dutch |
| no | nor | Norwegian |
| ny | nya | Nyanja |
| or | ori | Odia |
| pa | pan | Punjabi |
| pl | pol | Polish |
| pt | por | Portuguese |
| ro | ron | Romanian |
| ru | rus | Russian |
| sk | slk | Slovak |
| sl | slv | Slovenian |
| so | som | Somali |
| sq | sqi | Albanian |
| sr | srp | Serbian |
| sv | swe | Swedish |
| sw | swa | Swahili |
| ta | tam | Tamil |
| te | tel | Telugu |
| th | tha | Thai |
| tl | tgl | Tagalog |
| tr | tur | Turkish |
| uk | ukr | Ukrainian |
| ur | urd | Urdu |
| vi | vie | Vietnamese |
| yo | yor | Yoruba |
| zh | zho | Chinese |

## Todo

1. Build multiple languages into a single file usable by Bible Passage Reference Parser.
2. Move spec building process into the main build_lang script so that it's a one-step process.
3. Add more translation-specific versification.
4. Improve English translation representation.
5. Add additional tests from 01.add_lang.pl:

```perl
add_range_tests();
add_chapter_tests();
add_verse_tests();
add_sequence_tests();
add_title_tests();
add_ff_tests();
add_next_tests();
add_trans_tests();
add_book_range_tests();
add_boundary_tests();
```

## Changelog

January 31, 2026. Rework folder naming and include preferred book names from source data. Add an additional 2,100 languages from YouVersion data.

January 29, 2026. First release.
