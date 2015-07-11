errors = new ReactiveArray([]);

Template.register.helpers({
  errorList: function() {
    return errors.list();
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
      if (err) {
        console.log(err);
        errors.push({message: err.reason});
      } else {
        console.log('User with id: ' + Meteor.userId() + ' added successfully');
        Router.go('projects', {
          _id: Meteor.userId()
        });

      }
    });
  },
});
