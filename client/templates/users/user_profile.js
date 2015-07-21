Template.userProfile.helpers({
  fullName: function() {
    return this.profile.firstName + ' ' + this.profile.lastName;
  },

  gravatarURL: function() {
    var hash = Gravatar.hash(this.emails[0].address);
    return Gravatar.imageUrl(hash);
  }
});
