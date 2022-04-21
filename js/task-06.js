const inptRef = document.querySelector('#validation-input')

inptRef.addEventListener('blur', onChangeBorderColor)
function onChangeBorderColor(event) {
    const inptData = event.currentTarget.dataset.length;
    const inptLength = String(event.currentTarget.value.length);
    
    if (inptData === inptLength) {
        inptRef.classList.add('valid')
        inptRef.classList.remove('invalid')
    } else {
        inptRef.classList.add('invalid')
        inptRef.classList.remove('valid')
    }
    }