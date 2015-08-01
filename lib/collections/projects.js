Projects = new Mongo.Collection('projects');

Meteor.methods({
  insertProject: function(projectAttributes) {
    check(Meteor.userId(), String);
    check(projectAttributes, {
      name: Match.Where(function(val) {
        check(val, String);
        return val.length > 0;
      }),
      description: String
    });

    var ownerAttributes = {
      userId: Meteor.userId(),
      username: Meteor.user().username
    };

    var project = _.extend(projectAttributes, {
      owner: ownerAttributes,
      members: [],
      tasks: [],
      createdAt: new Date()
    });

    var projectId = Projects.insert(project);

    return {
      _id: projectId
    };
  },

  addUserToProject: function(requestAttributes) {
    check(Meteor.userId(), String);
    check(requestAttributes, {
      userId: String,
      requestingUserId: String,
      requestId: String,
      projectId: String,
      notificationId: String
    });

    var username = Meteor.users.findOne({_id: requestAttributes.requestingUserId }).username
    Projects.update({
                      _id : requestAttributes.projectId
                    }, {
                      $addToSet: {
                        members: {
                          userId: requestAttributes.requestingUserId,
                          username: username
                        }
                      }
                    });

    Requests.update({_id: requestAttributes.requestId}, {
      status: 'accepted'
    });

    Meteor.call('setNotificationAsRead', requestAttributes.notificationId, function(err, result) {
      if (err) {
        console.log(err);
      }
    });
  }
});
