const refsName = {
  input: document.querySelector('#name-input'),
  spanText: document.querySelector('#name-output')
}
refsName.input.addEventListener('input', onInputChange)
function onInputChange(event) {
  if (event.currentTarget.value === "") {
    refsName.spanText.textContent = "Anonymous"
  } else {
      refsName.spanText.textContent = event.currentTarget.value;
  }
}