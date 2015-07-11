describe("layout", function() {
  describe("main", function() {
    it("shows two buttons", function() {
      expect($('a.btn').length).toEqual(2);
    });
  });
});
