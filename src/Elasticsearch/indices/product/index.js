const schema = require("./mapping");
const client = require("../../ES");
const index = "product_v2";

async function mapping() {
	return client.indices.create({
		index: index,
		body: schema
	}, function (err, resp, respcode) {
		console.log(err, resp, respcode);
	});
}

async function createDocument(doc) {
	return client.index({
		index: index,
		body: doc
	}, function (err, resp, respcode) {
		if(err){
			console.log("Test");
			console.log(err.toJSON().response, respcode);
		}
	});
}

const revealed = {
	mapping,
	createDocument
};


module.exports = revealed;
