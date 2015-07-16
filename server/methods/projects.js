Meteor.methods({
  addProject: function(project) {
    project.createdAt = new Date();
    Projects.insert(project);
  }
});
