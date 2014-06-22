import Ember from "ember";
export default Ember.Handlebars.makeBoundHelper(function(questions) {
  return questions[(questions.length - 1)];
});
