module.exports = function decodeEvent (params) {
	switch (true) {
		case params.created:
			return eventWithBranch('new branch created', params);

		case params.deleted:
			return eventWithBranch('branch deleted', params);

		case params.commits && params.commits.length && !params.created && !params.deleted:
			return eventWithBranch('commits pushed', params);

		default:
			return ['other', params];
	}
}

function eventWithBranch (eventName, params) {
	return [eventName, getBranchName(params), params];
}

function getBranchName (params) {
	return params.ref.split('/').pop();
}
