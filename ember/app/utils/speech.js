export default {
  name: 'speech',
  speak: function(message, voice) {
    var voice = voice || 0;
    var msg = new SpeechSynthesisUtterance(message);
    var voices = speechSynthesis.getVoices();
    msg.voice = voices[voice];
    speechSynthesis.speak(msg);
  }
}
