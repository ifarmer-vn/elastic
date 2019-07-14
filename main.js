const productsIndex = require("./src/Elasticsearch/indices/products/index");
const product = require("./data/products-firebase-cdn-image");
const _ = require("lodash");

async function createMapping() {
	const test = await productsIndex.mapping();
	console.log(test);

}

async function mirrateData() {
	let count = 0;
	for (pp in product) {
		const val = product[pp];
		await productsIndex.createDocument(val);
		count++;
	}

	console.log("count", count);
}

async function main() {
	createMapping();
	mirrateData();
}

main();
