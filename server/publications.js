Meteor.publish('Projects', function() {
  return Projects.find();
});

Meteor.publish('UserData', function() {
  return Meteor.users.find();
});

Meteor.publish('Notifications', function() {
  check(this.userId, String);
  return Notifications.find({userId: this.userId});
});

Meteor.publish('Requests', function() {
  return Requests.find({'user.userId': this.userId});
});
