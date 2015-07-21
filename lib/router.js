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

Router.route('user/:_id', {
  name: 'userProfile',
  data: function() {
      Meteor.users.findOne({_id: this.params._id});
  }
});
