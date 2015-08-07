Template.notifications.helpers({
  notifications: function() {
    return Notifications.find({ userId: Meteor.userId() });
  },
  notificationCount: function() {
    return Notifications.find({ userId: Meteor.userId() }).count();
  },
  isInteractive: function(notification) {
    return Notification.findOne({_id: notification._id}).type === 'interactive';
  }
});

Template.notifications.events({
  'click #accept-button': function (e) {
    var self = this;

    var request = {
      userId: self.userId,
      requestingUserId: self.extraFields.requestingUserId,
      requestId: self.extraFields.requestId,
      projectId: self.extraFields.projectId,
      notificationId: self._id
    };

    Meteor.call('addUserToProject', request, function(err, result) {
      if (err) {
        Errors.throw(err.reason);
      }
    });
  },

  'click #reject-button': function (e) {
    var self = this;
    debugger
    var request = {
      userId: self.userId,
      requestId: self.extraFields.requestId,
      requestingUserId: self.extraFields.requestingUserId,
      projectId: self.extraFields.projectId,
      notificationId: self._id
    };

    Meteor.call('rejectUser', request, function(err, result) {
      if (err) {
        Errors.throw(err.reason);
      }
    });
  }
});
