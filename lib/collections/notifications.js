Notifications = new Mongo.Collection('notifications');

// TODO add allow/deny rules

createRequestNotification = function(request) {
  Notifications.insert({
    userId: request.project.ownerId,
    text: request.user.name + 'has request to join ' + request.project.name,
    createdAt: new Date(),
    read: false,
    type: 'interactive'
  });
};
