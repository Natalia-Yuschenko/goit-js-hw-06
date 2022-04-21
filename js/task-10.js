function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const ref = {
  inputElement: document.querySelector("input"),
  createBtnElement: document.querySelector("button[data-create]"),
  destroyBtnElement: document.querySelector("button[data-destroy]"),
  boxesElement: document.querySelector("#boxes"),
};
ref.inputElement.addEventListener("input", onInputValue);
ref.createBtnElement.addEventListener("click", onBtnCreate);
ref.destroyBtnElement.addEventListener("click", onDestroyBoxes);
function onInputValue() {
  return Number(ref.inputElement.value);
}
function onBtnCreate() {
  let currentValue = onInputValue();
  createBoxes(currentValue);
}
function createBoxes(amount) {
  let box = [];
  for (let i = 1; i <= amount; i += 1) {
    const startPx = 20;
    const growthPx = startPx + i * 10;
    const div = document.createElement("div");
    div.style.width = `${growthPx}px`;
    div.style.height = `${growthPx}px`;
    div.style.backgroundColor = getRandomHexColor();
    box.push(div);
  }
  ref.boxesElement.append(...box);
}
function onDestroyBoxes() {
  ref.boxesElement.innerHTML = "";
}
