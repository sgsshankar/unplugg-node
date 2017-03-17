var unirest = require("unirest");
var querystring = require("querystring");
var config = require('./config');
var Promise = require('promise/domains');

module.exports = {

	getForcast: function(apiKey, data, callbackUrl, forcast_to) {
		forcast_to = forcast_to || null;
		var forcast = config.config.forcast;
		var result = sendRequest(forcast, 'POST', {
			"data": data,
			"callback": callbackUrl,
			"forcast_to": forcast_to
		}, apiKey);
		return result;
	}

};

function sendRequest(fullpath, method, querystring, apiKey) {

	var options = {
		url: config.config.hostUrl + fullpath,
		qs: querystring,
		method: method,
		headers: {
			'x-access-token': apiKey,
			'Content-Type': 'application/json',
			'User-Agent': 'unplugg',
			'Accept': 'application/json'
		}
	};

	return new Promise(function(resolve, reject) {
		if (method == "GET") {
			unirest.get(options.url)
				.headers(options.headers)
				.send(options.qs)
				.end(function(response) {
					resolve(response.body);
				});
		} else if (method == "POST") {
			unirest.post(options.url)
				.headers(options.headers)
				.send(options.qs)
				.end(function(response) {
					resolve(response.body);
				});

		}
	});

}