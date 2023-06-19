const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;

decrementBtn.addEventListener('click', onMinusOne);
function onMinusOne() {
	counterValue -= 1;
	value.textContent = counterValue;
}

incrementBtn.addEventListener('click', onPlusOne);
function onPlusOne() {
	counterValue += 1;
	value.textContent = counterValue;
}
