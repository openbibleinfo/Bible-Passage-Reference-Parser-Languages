# Language Data for the Bible Passage Reference Parser

The code in this repository is mostly AI-generated.

This repository contains the YAML to Javascript build pipeline for [Bible Passage Reference Parser](https://github.com/openbibleinfo/Bible-Passage-Reference-Parser) language data.

## Structure
- `data/_defaults.yaml`: shared defaults for variables/options.
- `data/*.yaml`: per-language data (ISO 639-3 codes like `eng`, `zho`).
- `translations/*.yaml`: versification systems and translation aliases.
- `src/`: TypeScript source for building language output.
- `bin/compile.sh`: bundles `src/build_lang.ts` to `bin/build_lang.js`.
- `bin/build_spec.js`: builds localized-book Jasmine specs from `names/`.
- `lang/`: generated output files (optional; regenerate as needed).
- `names/`: generated book-name lists used to build tests.
- `test/`: generated localized-book specs.

## Quick start
```
npm install
bin/compile.sh
node bin/build_lang.js eng
```
Generate specs:
```
node bin/build_spec.js        # all languages
node bin/build_spec.js eng    # single language
```
Build all languages:
```
node bin/build_all_langs.js          # parallel build
node bin/build_all_langs.js -j 4     # set worker count
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

## YAML structure (data/*.yaml)

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
- `expand_characters`: array of `{ character, expand: [ ... ] }` to allow alternates
- `replace_characters_with`: `{ regexp, replacement }` (default converts spaces to `\s*`)
- `before_book_allowed_characters`, `after_book_allowed_characters`
- `before_every_book`, `after_every_book`
- `join_before`, `join_after`

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
- `texts` can be strings or objects with `text` and optional `normalize: none`.

### ordinals
Defines ordinal suffixes and optional Psalm handling:
```yaml
ordinals:
  - after: ["-st"]
    numbers: [1, 21, 31]
  - after: ["-nd"]
    numbers: [2, 22, 32]
  - between:
      regexp: \\s*
    texts: ["Psalm"]
```

## names/ output
`node bin/build_lang.js <lang>` writes `names/<lang>.yaml`, which is a normalized list of book texts used by `bin/build_spec.js`.
Names output collapses whitespace to single spaces and normalizes to NFC (combining-character variants are unified), but does not add extra variants.

### tests
Optional per-language Jasmine tests can be added to `data/<lang>.yaml`:
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
- This code does not yet support combining languages.
- Language codes are ISO 639-3 (e.g., `eng`, `zho`).

## ISO 639-1 → ISO 639-3 mapping (English names)
Mappings used by tooling:

| ISO 639-1 | ISO 639-3 | English name |
| --- | --- | --- |
| amf | amf | Hamer-Banna |
| ar | ara | Arabic |
| awa | awa | Awadhi |
| bba | bba | Baatonum (Bariba) |
| bg | bul | Bulgarian |
| bqc | bqc | Boko |
| bus | bus | Bokobaru |
| ceb | ceb | Cebuano |
| chr | chr | Cherokee |
| ckb | ckb | Central Kurdish |
| cs | ces | Czech |
| cy | cym | Welsh |
| da | dan | Danish |
| de | deu | German |
| dop | dop | Lukpa |
| el | grc | Greek |
| en | eng | English |
| es | spa | Spanish |
| fa | fas | Persian |
| fi | fin | Finnish |
| fr | fra | French |
| fue | fue | Fulfulde, Borgu |
| fuh | fuh | Fulfulde, Western Niger |
| he | heb | Hebrew |
| hi | hin | Hindi |
| hil | hil | Hiligaynon |
| hne | hne | Chhattisgarhi |
| hr | hrv | Croatian |
| ht | hat | Haitian Creole |
| hu | hun | Hungarian |
| hwc | hwc | Hawai‘i Creole English |
| id | ind | Indonesian |
| is | isl | Icelandic |
| it | ita | Italian |
| ja | jpn | Japanese |
| jv | jav | Javanese |
| kn | kan | Kannada |
| ko | kor | Korean |
| la | lat | Latin |
| leb | leb | Lala-Bisa |
| lg | lug | Ganda |
| mk | mkd | Macedonian |
| mkl | mkl | Mokilese |
| mr | mar | Marathi |
| mvc | mvc | Mamboru |
| nds | nds | Low German |
| ne | nep | Nepali |
| nl | nld | Dutch |
| no | nor | Norwegian |
| ny | nya | Nyanja |
| or | ori | Odia |
| pa | pan | Punjabi |
| pck | pck | Paite Chin |
| pl | pol | Polish |
| ppl | ppl | Pipil |
| pt | por | Portuguese |
| ro | ron | Romanian |
| ru | rus | Russian |
| sk | slk | Slovak |
| sl | slv | Slovenian |
| so | som | Somali |
| soy | soy | Miyobe |
| sq | sqi | Albanian |
| sr | srp | Serbian |
| sv | swe | Swedish |
| sw | swa | Swahili |
| ta | tam | Tamil |
| te | tel | Telugu |
| th | tha | Thai |
| tl | tgl | Tagalog |
| tmz | tmz | Tamanaku |
| tr | tur | Turkish |
| twi | twi | Twi |
| udu | udu | Uduk |
| uk | ukr | Ukrainian |
| ur | urd | Urdu |
| vi | vie | Vietnamese |
| wal | wal | Wolaytta |
| yo | yor | Yoruba |
| yom | yom | Yombe |
| zh | zho | Chinese |
