const productsIndex = require("../indices/products/index");
const categoriesIndex = require("../indices/categories/index");
const articlesIndex = require("../indices/articles/index");
const variantsIndex = require("../indices/variants/index");
const categories = require("../_data/categories-firebase-cdn-image");
const products = require("../_data/products-firebase-cdn-image");
const articles = require("../_data/articles-firebase-cdn-image");
const variants = require("../_data/variants-firebase-cdn-image");

// const  = require("../_data/");

const createMapping = async () => {
	await categoriesIndex.mapping();
	// await productsIndex.mapping();
	// await articlesIndex.mapping();
	// await variantsIndex.mapping();
};

const migrateData = () => {
	pushDataToES(productsIndex)(products);
	// pushDataToES(categoriesIndex)(categories);
	// pushDataToES(articlesIndex)(articles);
	// pushDataToES(productsIndex)(variants);
};

const pushDataToES = index => async data => {
	let count = 0;
	for (const pp in data) {
		const val = data[pp];
		await index.createDocument(val);
		count++;
	}
	console.log(index, count);
};

async function main() {
	createMapping();
	migrateData();
}

main();

