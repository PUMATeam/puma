Template.register.onCreated(function() {
  this.errors = new ReactiveVar();
  this.errors.set([])
});

Template.register.helpers({
  errorList: function() {
    return Template.instance().errors.get();
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
  'submit .form-signup': function(e, template) {
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
        var errors = [];
        errors.push({message: err.reason});
        template.errors.set(errors);
      } else {
        console.log('User with id: ' + Meteor.userId() + ' added successfully');
        Router.go('projects', {
          _id: Meteor.userId()
        });
      }
    });
  },
});
