Template.userProfile.helpers({
  fullName: function() {
    return this.profile.firstName + ' ' + this.profile.lastName;
  }
});
