Requests = new Mongo.Collection('requests');

Meteor.methods({
  addRequest: function(requestAttributes) {
    check(Meteor.userId(), String);
    check(requestAttributes, {
        user: Object,
        project: Object
    });

    if (hasRequestPending(requestAttributes.user.userId, requestAttributes.project.projectId)) {
      throw new Meteor.Error('User has already requested to join');
    }

    var request = _.extend(requestAttributes, {
      createdAt: new Date(),
      status: 'pending'
    });

    var requestId = Requests.insert(request);
    var request = _.extend(request, {
      _id: requestId
    });
    
    createRequestNotification(request);
  }
});

hasRequestPending = function(userId, projectId) {
  return Requests.find({
    'user.userId': userId,
    'project.projectId': projectId,
    status: 'pending' }).count() > 0;
};
