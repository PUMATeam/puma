errors = new ReactiveArray([]);

Template.login.helpers({
  errorList: function() {
    return errors.list();
  }
});

Template.login.events({
  '.signin submit': function(e) {
    e.preventDefault();
    var user = {
      email: $('#inputEmail').val(),
      password: $('#inputPassword').val()
    };

    Accounts.loginWithPassword(user.email, user.password, function(err){
      if (err) {
        errors.push({message: err.reason});
      } else {
        Router.go('projects', {
          _id: Meteor.userId()
        });
      }
    });
  }
});
