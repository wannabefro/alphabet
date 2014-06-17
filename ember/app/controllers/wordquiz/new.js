import Ember from "ember";
import speech from "../../utils/speech";
export default Ember.ObjectController.extend({
  message: null,
  speakMessage: function() {
    var message = this.get('message');
    if (!!message) {
      speech.speak(message);
    }
  }.observes('message'),

  actions: {
    welcome: function() {
      this.set('message', 'Welcome to the Word Quiz');
    }
  }
});
