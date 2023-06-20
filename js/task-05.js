const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputName);

function onInputName(evt) {
	if (!evt.currentTarget.value.trim() === false) {
		outputName.textContent = evt.currentTarget.value.trim();
	} else {
		outputName.textContent = 'Anonymous';
	}
	// !evt.currentTarget.value.trim() === false
	// 	? (outputName.textContent = evt.currentTarget.value.trim())
	// 	: (outputName.textContent = 'Anonymous');
}
