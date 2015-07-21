Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'projectsList',
  waitOn: function() {
    return Meteor.subscribe('Projects');
  }
});

Router.route('projects/new', {
  name: 'projectCreate'
});

Router.route('user/:userId', {
  name: 'userProfile',
  data: function() {
    return Meteor.users.findOne({_id: this.params.userId});
  }
});
