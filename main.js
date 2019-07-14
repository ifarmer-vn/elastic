const productIndex = require("./src/Elasticsearch/indices/product/index");
const product = require("./data/products-firebase-cdn-image");
const _ = require("lodash");

async function createMapping() {
	const test = await productIndex.mapping();
	console.log(test);

}

async function mirrateData() {
	let count = 0;
	for (pp in product) {
		const val = product[pp];
		await productIndex.createDocument(val);
		count++;
	}

	console.log("count", count);
}

async function main() {
	createMapping();
	mirrateData();
}

main();
