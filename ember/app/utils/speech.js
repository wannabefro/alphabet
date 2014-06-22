export default {
  name: 'speech',
  speak: function(message, voice) {
    return new Promise(function(resolve, reject) {
      var voice = voice || 0;
      var msg = new SpeechSynthesisUtterance(message);
      var voices = speechSynthesis.getVoices();
      msg.voice = voices[voice];
      speechSynthesis.speak(msg);
      msg.onend = function(e) {
        resolve();
      }
    });
  },
  getAudio: function() {
    return new Promise(function(resolve, reject) {
      getStream().then(function(success) {
        resolve();
      }, function(err) {
        reject();
      });
    });
  },
  voiceToText: function() {
    return new Promise(function(resolve, reject) {
      var text;
      var recognition = new webkitSpeechRecognition();
      recognition.onresult = function(event) {
        resolve(event.results[0][0].transcript);
      }
      recognition.start();
    });
  }
};

navigator.getUserMedia =  ( navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia);
function getStream() {
  return new Promise(function(resolve, reject) {
    navigator.getUserMedia({audio: true}, function(stream) {
      resolve();
    }, function(err) {
      reject();
    });
  });
}
