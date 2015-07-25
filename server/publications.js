Meteor.publish('Projects', function() {
  return Projects.find();
});

Meteor.publish('UserData', function() {
  return Meteor.users.find();
});

Meteor.publish('Notifications', function(userId) {
  check(userId, String);
  return Notifications.find({ userId: userId });
});
