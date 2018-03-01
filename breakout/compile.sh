set -e
set -o pipefail

CC_PATH="node_modules/google-closure-compiler/compiler.jar"

cp game.js tmp.js

echo "compiling code \o/"
java -jar "$CC_PATH" --externs=externs.js --js=tmp.js --language_in=ECMASCRIPT6 --language_out=ECMASCRIPT6 --compilation_level ADVANCED_OPTIMIZATIONS --rewrite_polyfills=false > compiled_game.js
