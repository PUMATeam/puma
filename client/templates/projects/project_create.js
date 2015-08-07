Template.projectCreate.events({
  'submit #new-project-form': function(e) {
    e.preventDefault();
    var project = {
      name: $(e.target).find('#project-name').val(),
      description: $(e.target).find('#project-description').val()
    }

    if (!project.name) {
      Errors.throw('Please enter a project name');
    } else if (!project.description) {
      Errors.throw('Please enter a description of the project');
    } else {
      Meteor.call('insertProject', project, function(err, result) {
        if (err) {
          Errors.throw(error.reason);
        }

        Router.go('projectPage', { _id: result._id });
      });
    }
  }
});
