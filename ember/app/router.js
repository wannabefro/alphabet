import Ember from 'ember';

var Router = Ember.Router.extend({
  location: AlphabetENV.locationType
});

Router.map(function() {
  this.resource('wordquiz', function() {
    this.route('new');
  });
});

export default Router;
