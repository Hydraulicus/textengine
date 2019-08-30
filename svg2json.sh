# converting SVG images to JSON
# by svgson
# https://github.com/elrumordelaluz/svgson-cli

STRING="export SVG to JSON"
echo $STRING
cd ./src/assets/logos/fullSize
dir
npx -p svgson ./src/assets/logos/fullSize/ --separated --output ./public/JSONS/
read -s -n 1 -p "Press any key to continue . . ."

# launching script definition in package.json
#"svg2json": "svgson ./src/assets/logos/fullSize/ --separated --output ./public/JSONS/"