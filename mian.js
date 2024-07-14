/*
  设置css文件:root中的变量值
  this指向当前操作的input元素
*/
function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

const inputs = document.querySelectorAll(".controls input");

inputs.forEach(input => {
  // 针对调整颜色添加input元素的change事件
  input.addEventListener("change", handleUpdate);
  input.addEventListener("mousemove", handleUpdate);
})