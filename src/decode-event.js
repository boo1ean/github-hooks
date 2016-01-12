module.exports = function decodeEvent (params) {
	switch (true) {
		case params.ref_type === 'branch':
			return 'new branch created';

		case params.commits && params.commits.length && !params.created:
			return 'commits to existing branch';

		default:
			return 'other';
	}
}
