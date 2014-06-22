import Ember from "ember";
import speech from "../../utils/speech";
export default Ember.ObjectController.extend({
  message: null,
  questionNumber: 0,
  currentQuestion: null,
  currentLetter: null,
  speakMessage: function() {
    var message = this.get('message');
    if (!!message) {
      speech.speak(message);
    }
  }.observes('message'),

  speakQuestion: function() {
    var that = this;
    var question = this.get('currentQuestion');
    if (!!question) {
      speech.speak(question).then(function(success) {
        speech.voiceToText().then(function(transcript) {
          if (transcript[0].toLowerCase() === that.get('currentLetter').toLowerCase()) {
            that.set('message', 'Good job! ' + transcript + ' does start with the letter ' + that.get('currentLetter'));
            that.send('updateQuestion', true);
          } else {
            that.set('message', 'Unlucky. Lets try a different letter');
            that.send('updateQuestion', false);
          }
          that.send('getQuestion');
        });
      });
    }
  }.observes('currentQuestion'),

  actions: {
    welcome: function() {
      var that = this;
      var defer = Ember.RSVP.defer();
      var welcomeMessage = [
        'Welcome to the Word Quiz.',
        'Click allow on the pop up to get started'
      ].join('\n');
      this.set('message', welcomeMessage);
      speech.getAudio().then(function(success){
        that.send('getQuestion');
      });
    },

    getQuestion: function() {
      var letter = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      this.send('newQuestion', this.content, letter);
      this.set('message', null);
      this.set('currentLetter', letter);
      this.incrementProperty('questionNumber');
      this.set('currentQuestion', 'Can you think of a word that starts with the letter ' + letter + '?');
    }
  }
});
