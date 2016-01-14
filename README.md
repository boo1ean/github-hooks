## Simplify github events handling

## Usage

```javascript
var githubEvents = require('github-events');

// Start listener for github hooks
// Setup github hook to http://your-server.com:3000/push
var events = githubEvents({ port: 3000 });

events.on('branch created', (branchName, params) => {
	console.log('New branch is created: %s', branchName);
	console.log('Original hook params:', params);
});
```

## List of events

- `commits pushed`
- `branch created`
- `branch deleted`
