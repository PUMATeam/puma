Template.userProfile.helpers({
  fullName: function() {
    return this.profile.firstName + ' ' + this.profile.lastName;
  },

  gravatarURL: function() {
    var hash = Gravatar.hash(this.emails[0].address);
    return Gravatar.imageUrl(hash);
  },

  projects: function() {
    return Projects.find({ "owner.userId": this._id });
  },

  memberOfProjects: function() {
    return Projects.find({ "members": this._id }, { "_id": 1, "name": 1});
  }
});
