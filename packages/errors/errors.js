Errors = {
  collection: new Mongo.Collection(null),

  throw: function(message) {
    Errors.collection.insert({ message: message });
  }
};
