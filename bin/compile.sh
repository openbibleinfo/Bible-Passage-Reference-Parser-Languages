script_dir="$(cd "$(dirname "$0")" && pwd)"
repo_root="$(cd "$script_dir/.." && pwd)"

npx esbuild "$repo_root/src/build_lang.ts" \
  --bundle --target=es2022 --platform=node --charset=utf8 --format=esm \
  --external:yaml \
  --outfile="$script_dir/build_lang.js"

npx esbuild "$repo_root/src/build_spec.ts" \
  --bundle --target=es2022 --platform=node --charset=utf8 --format=esm \
  --external:yaml --external:bible-passage-reference-parser/esm/bcv_parser.js \
  --outfile="$script_dir/build_spec.js"

npx esbuild "$repo_root/src/build_all_langs.ts" \
  --bundle --target=es2022 --platform=node --charset=utf8 --format=esm \
  --outfile="$script_dir/build_all_langs.js"

npx esbuild "$repo_root/src/fuzz_lang.ts" \
  --bundle --target=es2022 --platform=node --charset=utf8 --format=esm \
  --external:yaml --external:bible-passage-reference-parser/esm/bcv_parser.js \
  --outfile="$script_dir/fuzz_lang.js"

npx esbuild "$repo_root/src/loader.ts" \
  --bundle --target=es2022 --platform=node --charset=utf8 --format=esm \
  --outfile="$repo_root/loader.js"
