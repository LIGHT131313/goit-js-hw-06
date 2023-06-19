const inputFontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
// inputFontSizeControl.value = inputFontSizeControl.getAttribute('min');
// Start from the beginning or medium font size:
text.style.fontSize = `${inputFontSizeControl.value}px`;

inputFontSizeControl.addEventListener('input', onChangeSizeControl);

function onChangeSizeControl(evt) {
	text.style.fontSize = `${evt.currentTarget.value}px`;
}
