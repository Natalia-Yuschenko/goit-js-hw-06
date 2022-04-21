function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const ref = {
  btnElement: document.querySelector(".change-color"),
  spanElement: document.querySelector(".color"),
  bodyElement: document.querySelector("body"),
};
ref.btnElement.addEventListener("click", onBtnClick);
function onBtnClick() {
  let randomColor = getRandomHexColor();
  ref.bodyElement.style.backgroundColor = `${randomColor}`;
  ref.spanElement.textContent = randomColor;
}
