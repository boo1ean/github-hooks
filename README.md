## Simplify github events handling

## Usage

```javascript
var githubEvents = require('github-events');

// Start listener for github hooks
var events = githubEvents({ port: 3000 });

events.on('new branch created', function onNewBranchCreated (params) {
	console.log('New branch is created: %s', params.ref);
});
```

## List of events

- `new branch created`
- `commits pushed`
