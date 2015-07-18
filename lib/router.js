Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'projectsList'
});

Router.route('projects/new', {
  name: 'projectCreate'
})
