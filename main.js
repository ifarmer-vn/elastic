const productIndex = require("./src/Elasticsearch/indices/product/index");
const product = require("./data/products-firebase-cdn-image");
const _ = require("lodash");

async function createMapping() {
	const test = await productIndex.mapping();
	console.log(test);

}

function mirateData() {
	let count = 0;
	_.forEach(product, async (val, key) => {
		await  productIndex.createDocument(val);
		count++;

	});
	console.log("count", count);
}

async function main() {
	createMapping()
	mirateData();
}

main();
