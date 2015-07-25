Template.notifications.helpers({
  notificationCount: function(userId) {
    return Notifications.find({ userId: userId }).count();
  }
});
