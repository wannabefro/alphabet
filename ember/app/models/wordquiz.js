import DS from "ember-data";
export default DS.Model.extend({
  questions: DS.hasMany('question'),
  createdAt: DS.attr(),
  finishedAt: DS.attr()
});
