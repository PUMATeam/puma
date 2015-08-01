Template.notifications.helpers({
  notifications: function() {
    return Notifications.find({ userId: Meteor.userId() });
  },
  notificationCount: function() {
    return Notifications.find({ userId: Meteor.userId() }).count();
  }
});

Template.notifications.events({

});
