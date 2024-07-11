import { playSound, upKeyOrMouse } from "/src/function.js";

// 添加键盘按下和松开事件
window.addEventListener('keydown', playSound);
window.addEventListener('keyup', upKeyOrMouse);

// 添加鼠标按下和松开事件
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('mousedown', playSound);
  key.addEventListener('mouseup', upKeyOrMouse);
});

// 当点击span时，找到最近的key元素并触发点击事件
const spans = document.querySelectorAll('.key span');
spans.forEach(span => {
  span.addEventListener('click', function (event) {
    const keyElement = span.closest('.key');
    if (keyElement) {
      keyElement.querySelector('kbd').click();
    }
  });
});