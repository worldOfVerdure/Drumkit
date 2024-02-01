document.querySelectorAll(".drum").forEach(element => {
  element.addEventListener("click", () => {
    produceSound(element.innerHTML);
  });
})

document.addEventListener("keydown", event => {
  produceSound(event.key);
});

animateButton = press => {
  const btnElement = document.querySelector("." + press);
  btnElement.classList.add("pressed");

  setTimeout(() => btnElement.classList.remove("pressed"), 0300);
}

produceSound = press => {
  let pathString;
  switch (press) {
    case 'w':
      pathString = "sounds/tom-1.mp3";
      break;
    case 'a':
      pathString = "sounds/tom-2.mp3";
      break;
    case 's':
      pathString = "sounds/tom-3.mp3";
      break;
    case 'd':
      pathString = "sounds/tom-4.mp3";
      break;
    case 'j':
      pathString = "sounds/snare.mp3";
      break;
    case 'k':
      pathString = "sounds/crash.mp3";
      break;
    case 'l':
      pathString = "sounds/kick-bass.mp3";
      break;
    default:
  }
  const drumAudioObj = new Audio(pathString);
  drumAudioObj.play();

  animateButton(press);
}
