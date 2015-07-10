Template.register.helpers({
  errorList: function() {
    return Session.get('errors');
  },

  formValid: function(user) {
    return !($.isEmptyObject(user.userName) &&
          $.isEmptyObject(user.firstName) &&
          $.isEmptyObject(user.lastName) &&
          $.isEmptyObject(user.email) &&
          $.isEmptyObject(user.password));
  }
});

Template.register.events({
  'submit .form-signin': function(e) {
    Session.set('errors', null);
    e.preventDefault();
    var user = {
        email: $('#inputEmail').val(),
        password: $('#inputPassword').val(),
        profile: {
          userName: $('#inputUsername').val(),
          firstName: $('#inputFirstName').val(),
          lastName: $('#inputLastName').val()
        }
    };

    Accounts.createUser(user, function(err) {
      var errors = [];
      if (err) {
        console.log(err);
        errors.push({message: err.reason});
        Session.set('errors', errors);
      } else {
        Router.go('/projects');
        console.log('User with id: ' + Meteor.userId() + ' added successfully');
      }
    });
  },
});
