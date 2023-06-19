const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputName);

function onInputName(evt) {
	!evt.currentTarget.value === false
		? (outputName.textContent = evt.currentTarget.value.trim())
		: (outputName.textContent = 'Anonymous');
}
