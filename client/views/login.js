Template.login.onCreated(function() {
  this.errors = new ReactiveVar();
  this.errors.set([])
});

Template.login.helpers({
  errors: function() {
    return this.errors;
  },

  errorList: function() {
    return Template.instance().errors.get();
  }
});

Template.login.events({
  'submit .form-signin': function(e, template) {
    e.preventDefault();
    var user = {
      email: $('#inputEmail').val(),
      password: $('#inputPassword').val()
    };

    Meteor.loginWithPassword(user.email, user.password, function(err){
      if (err) {
        console.log(err.reason);
        var errors = [];
        errors.push({message: err.reason});
        template.errors.set(errors);
      } else {
        Router.go('projects', {
          _id: Meteor.userId()
        });
      }
    });
  }
});
