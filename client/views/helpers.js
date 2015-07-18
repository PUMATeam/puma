Template.registerHelper('isEmpty', function(collection) {
  return collection.count() == 0;
});
