Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('Projects');
  }
});

Router.route('/', {
  name: 'projectsList'
});

Router.route('projects/new', {
  name: 'projectCreate'
})
