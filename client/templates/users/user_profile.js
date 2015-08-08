Template.userProfile.helpers({
  fullName: function() {
    return this.profile.firstName + ' ' + this.profile.lastName;
  },

  gravatarURL: function() {
    return this.profile.gravatarURL;
  },

  projects: function() {
    return Projects.find({ "owner.userId": this._id });
  },

  memberOfProjects: function() {
    return Projects.find({ "members.userId": this._id }, { "userId": 1, "username": 1});
  }
});
