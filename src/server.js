var express = require('express');
var bodyParser = require('body-parser');
var assert = require('assert');

function startServer (opts) {
	assert(opts.port, 'Port is required for starting server');
	assert(opts.handleEvent, 'handleEvent function is required');
	assert(opts.log, 'log is required');

	var port = opts.port || process.env.PORT || 3333;

	express.post('/push', bodyParser.json(), function handleEvent (req, res) {
		opts.log.debug('Got request!');
		opts.handleEvent(req.body);
		res.end();
	});

	express.listen(port, function onStarted () {
		opts.log.info('Waiting for github events on port %s', port);
	});
}


module.exports = startServer;
