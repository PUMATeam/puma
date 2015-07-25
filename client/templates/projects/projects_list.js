Template.projectsList.helpers({
  projects: function() {
    return Projects.find();
  },
  canJoinProject:  function(userId, projectId) {
    var projectOwnerOrMember = Projects.find({ $or: [{'owner.userId': userId, _id: projectId}, { members: { $elemMatch: { userId: userId } }] });

    return projectOwnerOrMember.count() === 0;
  }
});
