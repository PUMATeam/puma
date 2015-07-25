Template.projectItem.helpers({
  canJoinProject:  function(userId, projectId) {
    var projectOwnerOrMember = Projects.find({ $or:
      [{
        'owner.userId': userId,
        _id: projectId},
        {
          members:
          {
            $elemMatch:
            {
              userId: userId
            }
          }
        }
        ]
      }
    );

    return projectOwnerOrMember.count() === 0 && Meteor.userId();
  }
});

Template.projectItem.events({
  'click .join-button': function(e) {
    e.preventDefault();
    var request = {
      user: {
        userId: Meteor.userId(),
        username: Meteor.user().username
      },
      project: {
        name: this.name,
        projectId: this._id,
        ownerId: this.owner.userId
      }
    };

    Meteor.call('addRequest', request, function (err, result) {
      if (err) {

      } else {
        Router.go('projectPage', this._id);
      }
    });

  }
});
