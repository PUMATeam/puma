Template.projects.helpers({
  projects: function() {
    return Projects.find({ owner: Meteor.userId() });
  },

  projectsEmpty: function() {
    return Projects.find({ owner: Meteor.userId() }).count() == 0;
  }
});

Template.projects.events({
});
