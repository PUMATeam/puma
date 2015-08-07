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
    text: Meteor.user().username + ' has requested to join ' + request.project.name,
    createdAt: new Date(),
    read: false,
    type: 'interactive',
    extraFields: {
      projectId: request.project.projectId,
      requestId: request._id,
      requestingUserId: Meteor.userId()
    }
  });
};

createTextNotification = function(userId, notificationText) {
  Notifications.insert({
     userId: userId,
     text: notificationText,
     createdAt: new Date(),
     read: false,
     type: 'simple',
     extraFields: {}
   })
}

Meteor.methods({
  setNotificationAsRead: function(notification) {
    check(notification, String);
    Notifications.update({ _id: notification }, {
      $set: {
        read: true
      }
    });
  }
});
