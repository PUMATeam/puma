Router.route('/', function() {
  this.render('home');
});

Router.route('/register', function() {
  this.render('register');
});

Router.route('/login', function() {
  this.render('login')
})

Router.route('/projects', {
    name: 'projects',

    layoutTemplate: 'applicationLayout',

    yieldRegions: {
      'main': { to: 'projects' }
    },
});
