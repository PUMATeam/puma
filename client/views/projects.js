Template.projects.helpers({
  projects: function() {
    return Projects.find({ owner: Meteor.userId() });
  },

  projectsEmpty: function() {
    return Projects.find({ owner: Meteor.userId() }).count() == 0;
  }
});

Template.projects.events({
  // "click #create-project-button": function(e, template) {
  //   e.preventDefault();
  //   console.log("clicked");
  //   $("#create-project").modal("show");
  // }
});
