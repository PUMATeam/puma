Notifications = new Mongo.Collection('notifications');

// TODO add allow/deny rules
// user is owner of project - deny
// user is not logged in - deny

createRequestNotification = function(request) {
  Notifications.insert({
    userId: request.project.ownerId,
    requestingUserId: Meteor.userId(),
    text: Meteor.user().username + ' has requested to join ' + request.project.name,
    createdAt: new Date(),
    read: false,
    type: 'interactive'
  });
};
