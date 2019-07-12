const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
	host: [
		{
			host: '127.0.0.1',
			auth: 'elastic:changeme',
			protocol: 'http',
			port: 9200
		}
	]
});

module.exports = Object.freeze(client);