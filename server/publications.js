Meteor.publish('Projects', function() {
  return Projects.find();
});
