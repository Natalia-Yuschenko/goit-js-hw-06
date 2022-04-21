const ref = {
  inputElement: document.querySelector("#font-size-control"),
  textElement: document.querySelector("#text"),
};
ref.inputElement.addEventListener("input", onInputValue);
function onInputValue() {
  let data = document.querySelector("#font-size-control").value;
  ref.textElement.style.fontSize = `${data}px`;
}
