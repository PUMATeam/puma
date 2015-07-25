Meteor.publish('Projects', function() {
  return Projects.find();
});

Meteor.publish('UserData', function() {
  return Meteor.users.find();
});

Meteor.publish('Notifications', function() {
  return Notifications.find();
});
