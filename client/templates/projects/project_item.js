Template.projectItem.helpers({
  joinProject:  function(projectId) {
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
  },

  isPending: function(projectId) {
    console.log(Meteor.userId() + " " + projectId);
    console.log(hasRequestPending(Meteor.userId(), projectId));
    return hasRequestPending(Meteor.userId(), projectId);
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
        Router.go('projectPage', { _id: this._id } );
      }
    });
  },
  'click .project-name': function(e) {
	Router.go('projectPage', { _id: this._id } );
  }
});
