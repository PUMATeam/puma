Meteor.methods({
  addProject: function(project) {
    _.extend(project, {createdAt: new Date()});
    Projects.insert(project);
  }
});
