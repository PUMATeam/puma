Template.projects.helpers({
  projects: function() {
    return Projects.find({ 'owner._id': Meteor.userId() });
  },

  projectsEmpty: function() {
    return Projects.find({ 'owner._id': Meteor.userId() }).count() == 0;
  }
});

Template.projects.events({
  'submit #new-project': function(e, template) {
    e.preventDefault();
    var project = {
      name: $('#project-name').val(),
      description: $('#project-description').val(),
      owner: { _id: Meteor.userId(),
               userName: Meteor.user().profile.userName
             }
    };

    Meteor.call('addProject', project);
  }
});
