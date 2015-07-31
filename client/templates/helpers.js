Template.registerHelper('isEmpty', function(collection) {
  return collection.count() == 0;
});

Template._loginButtons.events({
	'click #login-buttons-logout': function (ev) {
		if (Meteor.isClient) {
			Router.go('/');
		}
	}
});
