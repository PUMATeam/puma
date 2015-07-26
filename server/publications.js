Meteor.publish('Projects', function() {
  return Projects.find();
});

Meteor.publish('UserData', function() {
  return Meteor.users.find();
});

Meteor.publish('Notifications', function() {
  if (this.userId) {
    return Notifications.find({});
  }

  return null;
});
