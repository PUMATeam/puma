Meteor.publish("user-projects", function(userId) {
  return Projects.find({owner: userId});
})
