Template.projectCreate.events({
  'submit #new-project-form': function(e) {
    e.preventDefault();
    var project = {
      name: $(e.target).find('#project-name').val(),
      description: $(e.target).find('#project-description').val()
    }

    Meteor.call('insertProject', project, function(err, result) {
      if (err) {
        //TODO display errors in a more sensible manner
        return alert(err.reason);
      }

      Router.go('projectPage', { _id: result._id });
    });
  }
});
