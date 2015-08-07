Template.meteorErrors.helpers({
  errors: function() {
    return Errors.collection.find();
  }
});

Template.meteorError.onRendered(function() {
  var error = this.data;
});
