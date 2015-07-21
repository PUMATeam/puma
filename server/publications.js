Meteor.publish('Projects', function() {
  return Projects.find();
});

Meteor.publish('UserData', function() {
  return Meteor.users.find();
});
