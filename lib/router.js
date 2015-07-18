Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() {
    return Meteor.subscribe('projects');
  }
});

Router.route('/', {

});
