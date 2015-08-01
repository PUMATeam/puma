Notifications = new Mongo.Collection('notifications');

// TODO add allow/deny rules
// user is owner of project - deny
// user is not logged in - deny

createRequestNotification = function(request) {
  check(request, {
    user: Object,
    project: Object,
    createdAt: Date,
    status: String,
    _id: String
  });

  Notifications.insert({
    userId: request.project.ownerId,
    requestingUserId: Meteor.userId(),
    text: Meteor.user().username + ' has requested to join ' + request.project.name,
    createdAt: new Date(),
    read: false,
    type: 'interactive',
    extraFields: {
      projectId: request.project.projectId,
      requestId: request._id
    }
  });
};

Meteor.methods({
  setNotificationAsRead: function(notification) {
    check(notification, String);
    console.log(notification);
    Notifications.update({ _id: notification }, {
      $set: {
        read: true
      }
    });
  }
});
