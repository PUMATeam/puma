Accounts.onCreateUser(function(option, user) {
  if (!user.profile) {
    user.profile = {};
  }
  console.log(user);
  var hash = Gravatar.hash(user.emails[0].address);
  var gravatarURL = Gravatar.imageUrl(hash);
  _.extend(user.profile, { gravatarURL: gravatarURL});
  _.extend(user.profile, { firstName: option.profile.firstName });
  _.extend(user.profile, { lastName: option.profile.lastName });
  return user;
});
