Template.projectItem.helpers({
  canJoinProject:  function(projectId) {
    var projectOwnerOrMember = Projects.find({ $or:
      [{
        'owner.userId': Meteor.userId(),
        _id: projectId},
        {
          members:
          {
            $elemMatch:
            {
              userId: Meteor.userId()
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
        console.log(err.reason);
      } else {
        Router.go('projectPage', this._id);
      }
    });
  }
});
