const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputName);

function onInputName(evt) {
	const trimmedValue = evt.currentTarget.value.trim();
	outputName.textContent = trimmedValue !== '' ? trimmedValue : 'Anonymous';
}
