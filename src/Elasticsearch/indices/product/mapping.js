
const index = {
	mappings: {
		properties: {
			brand: {
				type: "keyword"
			},
			category: {
				type: "keyword"
			},
			content: {
				type: "keyword"
			},
			key: {
				type: "keyword"
			},
			shortDescription: {
				type: "keyword"
			},
			shortSpecs: {
				type: "keyword"
			},
			specs: {
				type: "keyword"
			},
			title: {
				type: "keyword"
			},

		}
	}

};
module.exports = index;