const inputValidation = document.querySelector('#validation-input');
const dataLength = Number(inputValidation.getAttribute('data-length'));

inputValidation.addEventListener('blur', onInputValidation);

function onInputValidation(evt) {
	if (evt.currentTarget.value.length === dataLength) {
		if (inputValidation.classList.contains('invalid')) {
			inputValidation.classList.replace('invalid', 'valid');
		} else {
			inputValidation.classList.add('valid');
		}
	} else {
		if (inputValidation.classList.contains('valid')) {
			inputValidation.classList.replace('valid', 'invalid');
		} else {
			inputValidation.classList.add('invalid');
		}
	}
}
