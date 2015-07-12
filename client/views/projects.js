Template.projects.helpers({
  projects: function() {
    return Projects.find({ owner: Meteor.userId() });
  }
});
