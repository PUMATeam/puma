Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  
  waitOn: function() {
    return Meteor.userId() ?
      Meteor.subscribe('Notifications', Meteor.userId()) :
      null
  }
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
