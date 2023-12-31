function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click', onChangeColorBtn);

function onChangeColorBtn() {
	spanColor.textContent = getRandomHexColor();
	body.style.backgroundColor = spanColor.textContent;
}
