script_dir="$(cd "$(dirname "$0")" && pwd)"
repo_root="$(cd "$script_dir/.." && pwd)"

npx esbuild "$repo_root/src/build_lang.ts" --bundle --target=es2022 --platform=node --charset=utf8 --format=esm --external:yaml --outfile="$script_dir/build_lang.js"
