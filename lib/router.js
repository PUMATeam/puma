Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {
  name: 'projectsList',
  waitOn: function() {
    return Meteor.subscribe('Projects');
  }
});

Router.route('projects/new', {
  name: 'projectCreate'
})
