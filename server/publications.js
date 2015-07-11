Meteor.publish('projectsByUser', function(userId) {
  console.log(userId);
  return Projects.find({owner: userId});
})
