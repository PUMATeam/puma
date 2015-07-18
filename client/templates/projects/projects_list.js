var projectsFixture = [{
    name: 'Project 1',
    description: 'This the first project, taken right out of a fixture',
    createdAt: new Date(),
    owner: {
      userId: '1',
      username: 'benny'
    }
  },
  {
    name: 'Project 2',
    description: 'This the first project, taken right out of a fixture',
    createdAt: new Date(),
    owner: {
      userId: '1',
      username: 'benny'
    }
  }
];

Template.projectsList.helpers({
  projects: projectsFixture
});
