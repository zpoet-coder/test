// 获取时、分、秒三个指针元素
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

/*
* 根据当前时间计算时、分、秒三个指针的旋转角度
* 每秒刷新一次
*/
function setDateTime() {
  const now = new Date();
  // 在页面显示当前时间
  const currentTime = document.querySelector('.current-time span');
  currentTime.textContent = now;
  currentTime.style.color = '#ccc';

  const seconds = now.getSeconds();
  const secondsDeg = (seconds / 60) * 360;
  secondHand.style.rotate = `${secondsDeg}deg`;

  const mins = now.getMinutes();
  const minsDeg = (mins / 60) * 360 + (seconds / 60) * 6;
  minHand.style.rotate = `${minsDeg}deg`;

  const hours = now.getHours();
  const hoursDeg = (hours / 12) * 360 + (mins / 60) * 30;
  hourHand.style.rotate = `${hoursDeg}deg`;
}

// 初始化时间，并且每秒更新一次
setDateTime();
setInterval(setDateTime, 1000);