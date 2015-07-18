Projects = new Mongo.Collection('projects');

Meteor.methods({
  insertProject: function(projectAttributes) {
    check(Meteor.userId(), String);
    check(projectAttributes, {
      name: Match.Where(function(val) {
        check(val, String);
        return val.length > 0;
      }),
      description: String
    });

    var ownerAttributes = {
      userId: Meteor.userId(),
      username: Meteor.user().username
    };

    var project = _.extend(projectAttributes, {
      owner: ownerAttributes,
      members: [],
      tasks: [],
      createdAt: new Date()
    });

    var projectId = Projects.insert(project);

    return {
      _id: projectId
    };
  }
});
