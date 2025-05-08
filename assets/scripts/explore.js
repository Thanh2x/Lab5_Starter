// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const smileySelect = document.querySelector('img');
  const buttonSelect = document.querySelector('button');
  const textSelect = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const synthesis = window.speechSynthesis;

  let voices = [];

  voices = synthesis.getVoices();

  // MDN code
  function populateVoiceList() {
    voices = synthesis.getVoices();
    voiceSelect.innerHTML = '';

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.value = voices[i].name;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }


  buttonSelect.addEventListener("click", function () {
    // Nothing selected or text
    if (textSelect.value == '' || voiceSelect.selectedIndex < 1) {
      return;
    }

    const textToSpeak = new SpeechSynthesisUtterance(textSelect.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        textToSpeak.voice = voices[i];
      }
    }

    //face change
    textToSpeak.onstart = () => {
      smileySelect.src = "assets/images/smiling-open.png";
    };

    textToSpeak.onend = () => {
      smileySelect.src = "assets/images/smiling.png";
    };

    speechSynthesis.speak(textToSpeak);

  });

}