/* 
移除playing类名
 */
function removeClassName(asciiCode) {
  const key = document.querySelector(`div[data-key="${asciiCode}"]`);
  if (!key) return;
  key.classList.remove("playing");
}

/* 
根据键盘事件或鼠标事件获取ascii码
通过data-key属性定位元素
播放音频并添加playing类名
*/
export function playSound(event) {
  var asciiCode;
  // 分别处理键盘事件和鼠标事件
  if (event.type === 'keydown') {
    asciiCode = event.keyCode;
  } else if (event.type === 'mousedown' || event.type === 'click') {
    const keyElement = event.target.closest('.key');
    if (!keyElement) return;
    asciiCode = parseInt(keyElement.getAttribute('data-key'));
  }


  // 定位要播放音频和添加类名的元素
  const audio = document.querySelector(`audio[data-key="${asciiCode}"]`);
  if (!audio) return;
  const key = document.querySelector(`div[data-key="${asciiCode}"]`);

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

/* 
根据键盘事件或鼠标事件获取ascii码
通过data-key属性定位元素
移除playing类名
*/
export function upKeyOrMouse(event) {
  var asciiCode;
  if (event.type === 'keyup') {
    asciiCode = event.keyCode;
    removeClassName(asciiCode);
  }
  else if (event.type === 'mouseup') {
    const keyElement = event.target.closest('.key');
    if (!keyElement) return;
    asciiCode = parseInt(keyElement.getAttribute('data-key'));

    setTimeout(() => removeClassName(asciiCode), 70)
  }
}
