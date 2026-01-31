# AGENTS.md

Guidance for working in this repo.

## Purpose
This repo builds language-specific Bible reference parsing data from YAML language files for Bible-Passage-Reference-Parser. Language codes are ISO 639-3 (e.g., `eng`, `zho`).

## Quick Commands
- Install deps: `npm install`
- Build bundle: `bin/compile.sh`
- Build language data: `node bin/build_lang.js eng` (writes `lang/eng.js` and `book_names/all/eng.yaml`)
- Build specs from `book_names/all/`: `node bin/build_spec.js` (all) or `node bin/build_spec.js eng` (single)

## Key Inputs
- `data/_defaults.yaml`: required defaults for `variables` and `options`.
- `data/*.yaml`: language-specific variables/books/ordinals/options.
- `translation_systems/*.yaml`: versification systems and translation aliases.

## Core Files
- `src/yaml_files.ts`: loads defaults + language YAML and merges them.
- `src/books.ts`: merges book entries and expands before/after/join patterns.
- `src/regexps.ts`: builds regex patterns with grex + normalization handling.
- `src/book_regexps.ts`: builds per-book regexes using options.
- `src/build_lang.ts`: orchestrates data loading and prints JS classes.

## Output
- `lang/*.js`: generated language outputs (commit optional; regenerate as needed).
- `book_names/all/*.yaml`: generated book-name lists (used to generate specs).
- `test/*.spec.js`: generated localized-book specs from `book_names/all/`.
