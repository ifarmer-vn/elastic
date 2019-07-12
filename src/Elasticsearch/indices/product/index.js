const schema = require("./mapping");
const client = require("../../ES");

async function mapping() {
	return client.indices.create({
		index: 'product_v1',
		body: schema
	}, function (err, resp, respcode) {
		console.log(err, resp, respcode);
	});
}

async function createDocument(doc) {
	return client.index({
		index: "product_v1",
		body: {
			doc
		}
	}, function (err, resp, respcode) {
		console.log(err, resp, respcode);
	});
}

const revealed = {
	mapping,
	createDocument
};


module.exports = revealed;
