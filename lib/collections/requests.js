Requests = new Mongo.Collection('requests');

Meteor.methods({
  addRequest: function(requestAttributes) {
    check(Meteor.userId(), String);

    // TODO add more checks

    var request = _.extend(requestAttributes, {
      createdAt: new Date(),
      status: 'pending'
    });

    Requests.insert(request);
    createRequestNotification(request);
  }
});

hasRequestPending = function(userId, projectId) {
  return Requests.find({
    'user.userId': userId,
    'project.projectId': projectId }).count() === 0;
};
