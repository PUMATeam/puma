Requests = new Mongo.Collection('requests');

Meteor.methods({
  addRequest: function(requestAttributes) {
    check(Meteor.userId(), String);
    check(requestAttributes, {
        user: Object,
        project: Object
    });

    // TODO add more checks

    var request = _.extend(requestAttributes, {
      createdAt: new Date(),
      status: 'pending'
    });

    Requests.insert(request);
    createRequestNotification(request);
  }
});
