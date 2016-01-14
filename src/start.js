var startServer = require('./server');
var decodeEvent = require('./decode-event');
var EventEmitter = require('events').EventEmitter;

var DEFAULT_PORT = 3333;

module.exports = function createRepoEventBus (opts) {
	opts = opts || {};
	var eventBus = new EventEmitter();

	startServer({
		port: opts.port || DEFAULT_PORT,
		handleEvent: handleEvent
	});

	function handleEvent (params) {
		var event = decodeEvent(params);
		eventBus.emit.apply(eventBus, event.name, event.params);
	}

	return eventBus;
}
