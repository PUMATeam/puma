Template.projectItem.helpers({
  canJoinProject: function(project) {
    return (Meteor.userId() !== project.owner.userId) &&
      (Projects.find({ _id: project._id,
        members: {
          $elemMatch: {
            userId: Meteor.userId()
          }
      }
    }).count() == 0);
  }
});

Template.projectItem.events({
  'click .join-button': function(e) {
    
  }
})
