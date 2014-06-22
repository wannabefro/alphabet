import Ember from "ember";
export default Ember.Route.extend({
  currentQuestion: null,
  model: function() {
    var that = this;
    return this.store.createRecord('wordquiz').save().then(function(model) {
      that.controllerFor('wordquiz.new').send('welcome');
      return model;
    }, function(error) {
    });
  }, 

  actions: {
    newQuestion: function(content, letter) {
      var that = this;
      this.store.createRecord('question', {wordquiz: content, letter: letter}).save().then(function(question) {
        that.set('currentQuestion', question);
      });
    },

    updateQuestion: function(correct) {
      var question = this.get('currentQuestion');
      question.set('correct', correct);
      question.save();
    }
  }
});
