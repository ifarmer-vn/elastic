const productIndex = require("./src/Elasticsearch/indices/product/index");
const product = require("./data/products-firebase-cdn-image");
const _ = require("lodash");

function createMapping() {
	const test = await
	schema.mappingProduct();
	console.log(test);

}

async function main() {

	_.forEach(product, (val, key) => {
		productIndex.createDocument(val)
	});
}

main();
