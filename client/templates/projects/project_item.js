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

  isRejected: function(projectId) {
    var rejectedRequest = Requests.findOne({'project.projectId': projectId, 'user.userId': Meteor.userId(), status: 'rejected'});

    return !!rejectedRequest;
  },

  isPending: function(projectId) {
    return hasRequestPending(Meteor.userId(), projectId);
  }
});

Template.projectItem.events({
  'click .join-button': function(e) {
    e.preventDefault();

  	// TODO use arrow function when ES6 support is available
    var that = this;

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
		console.error(err.reason);
      } else {
        Router.go('projectPage', { _id: that._id } );
      }
    });
  },
  'click .project-name': function(e) {
	Router.go('projectPage', { _id: this._id } );
  }
});
