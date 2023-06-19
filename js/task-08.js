const userForm = document.querySelector('.login-form');

userForm.addEventListener('submit', onSubmit);

function onSubmit(evt) {
	evt.preventDefault();
	const { email, password } = evt.currentTarget.elements;
	const userData = {
		email: email.value,
		password: password.value,
	};
	!email.value || !password.value
		? alert('Enter ALL fields!!!')
		: console.log(userData);
	evt.currentTarget.reset();
}
