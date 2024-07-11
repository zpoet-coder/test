export function playSound(event) {
  // console.log(event);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audio) return;
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  // console.log('audioElement', audio, '\nkeyElement', key);

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

export function removeClassName(event) {
  // console.log(event);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  key.classList.remove("playing");
}