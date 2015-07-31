Accounts.onLogin ( function () {
	// Makes sure it only runs on the client's side.
	if (Meteor.isClient) {
		Router.go('/');
	}
})
