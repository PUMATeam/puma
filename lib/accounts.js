Accounts.onLogin ( function () {
	// Makes sure it only runs on the client's side because of iron-router.
	if (Meteor.isClient) {
		Router.go('/');
	}
})
