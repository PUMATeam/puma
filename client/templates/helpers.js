Template.registerHelper('isEmpty', function(collection) {
  return collection.count() == 0;
});

// Just a cosmetic change - when logging out, route to '/'.
Template._loginButtons.events({
	'click #login-buttons-logout': function (ev) {
		Router.go('/');
	}
});
