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

Router.route('projects/:_id', {
  name: 'projectPage',
  data: function() {
    return Projects.findOne(this.params._id);
  }
});
