Template.projectCreate.events({
  'submit #new-project-form': function(e) {
    e.preventDefault();

    var project = {
      name: $(e.target).find('#project-name').val(),
      description: $(e.target).find('#project-description').val()
    }

    project._id = Projects.insert(project);
    Router.go('projectPage', project);
  }
});
