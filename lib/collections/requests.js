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
  },

  rejectUser: function (requestAttributes) {
    check(Meteor.userId(), String);
    check(requestAttributes, {
      userId: String,
      requestId: String,
      requestingUserId: String,
      projectId: String,
      notificationId: String
    });

    var projectName = Projects.findOne({_id: requestAttributes.projectId}).name;
    Requests.update({_id: requestAttributes.requestId}, { $set: { status: 'rejected'} });
    createTextNotification(requestAttributes.requestingUserId, 'Your request to join ' + projectName + ' has been rejected');
    Meteor.call('setNotificationAsRead', requestAttributes.notificationId);
  }
});

hasRequestPending = function(userId, projectId) {
  return Requests.find({
    'user.userId': userId,
    'project.projectId': projectId,
    status: 'pending' }).count() > 0;
};
