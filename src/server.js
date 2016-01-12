var express = require('express');
var bodyParser = require('body-parser');
var assert = require('assert');
var debug = require('debug')('github-hooks');

function startServer (opts) {
	assert(opts.port, 'port is required to start server');
	assert(opts.handleEvent, 'handleEvent function is required');

	var app = express();

	app.post('/push', bodyParser.json(), function handleEvent (req, res) {
		debug('Got request!', req.body);
		opts.handleEvent(req.body);
		res.end();
	});

	app.listen(opts.port, function onStarted () {
		debug('Waiting for github events on port %s', opts.port);
	});

	return app;
}


module.exports = startServer;
