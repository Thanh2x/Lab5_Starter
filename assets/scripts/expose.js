// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const hornSelect = document.getElementById("horn-select");
  const imgSelect = document.querySelector("img[alt='No image selected']");
  const audioSelect = document.querySelector("audio");
  const buttonSelect = document.querySelector("button");
  const volumeSelect = document.getElementById("volume");
  const volumeImgSelect = document.querySelector("img[alt='Volume level 2']");
  const jsconfetti = new JSConfetti();
  //Horn logic

  hornSelect.addEventListener('change', function () {
    const hornValue = hornSelect.value;

    if (hornValue === "car-horn") {
      imgSelect.src = "assets/images/car-horn.svg";
      audioSelect.src = "assets/audio/car-horn.mp3";
    }
    else if (hornValue === "party-horn") {
      imgSelect.src = "assets/images/party-horn.svg";
      audioSelect.src = "assets/audio/party-horn.mp3";
    }
    else if (hornValue === "air-horn") {
      imgSelect.src = "assets/images/air-horn.svg";
      audioSelect.src = "assets/audio/air-horn.mp3";
    }
  });

  // Volume logic
  volumeSelect.addEventListener("input", function () {
    const volume = volumeSelect.value;
    audioSelect.volume = volume / 100;

    if (volume === 0) {
      volumeImgSelect.src = "assets/icons/volume-level-0.svg";
    } else if (volume >= 1 && volume < 33) {
      volumeImgSelect.src = "assets/icons/volume-level-1.svg";
    } else if (volume >= 33 && volume < 67) {
      volumeImgSelect.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImgSelect.src = "assets/icons/volume-level-3.svg";
    }
  });

  // Button logic
  buttonSelect.addEventListener("click", function () {
    audioSelect.play();
    if (selectHorn.value === "party-horn") {
      jsconfetti.addConfetti();
    }
  });

}