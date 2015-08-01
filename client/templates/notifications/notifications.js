Template.notifications.helpers({
  notifications: function() {
    return Notifications.find({ userId: Meteor.userId() });
  },
  notificationCount: function() {
    return Notifications.find({ userId: Meteor.userId() }).count();
  }
});

Template.notifications.events({
  'click #accept-button': function (e) {
    var self = this;

    var request = {
      userId: self.userId,
      requestingUserId: self.requestingUserId,
      requestId: self.extraFields.requestId,
      projectId: self.extraFields.projectId,
      notificationId: self._id
    };

    Meteor.call('addUserToProject', request, function(err, result) {
      if (err) {
        console.log(err.reason);
      }
    });
  }
});
