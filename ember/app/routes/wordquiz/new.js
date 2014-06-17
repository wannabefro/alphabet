import Ember from "ember";
export default Ember.Route.extend({
  model: function() {
    var that = this;
    this.store.createRecord('wordquiz').save().then(function(success) {
      that.controller.send('welcome');
    }, function(error) {
    });
  }
});
