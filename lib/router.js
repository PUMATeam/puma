Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'projectsList',
  waitOn: function() {
    return [Meteor.subscribe('Projects'),
            Meteor.userId() ? Meteor.subscribe('Notifications', Meteor.userId()) : null];
  }
});

Router.route('projects/new', {
  name: 'projectCreate'
});

Router.route('projects/:_id', {
  name: 'projectPage',
  data: function() {
    return Projects.findOne(this.params._id);
  }
});

Router.route('user/:userId', {
  name: 'userProfile',
  data: function() {
    return Meteor.users.findOne({_id: this.params.userId});
  }
});
