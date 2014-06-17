import DS from "ember-data";
export default DS.Model.extend({
  wordquiz: DS.belongsTo('wordquiz'),
  letter: DS.attr(),
  correct: DS.attr()
});
