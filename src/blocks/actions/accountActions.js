import { LOGIN, LOGOUT } from './../constants/actionTypes.js';

// User
// login
// password
// avatar
// balance
// status to server
// endingAbonentPay
// UserData will get to request to server.
const logIn = (login, password, userData) => ({
	type: LOGIN
	isLogged: true,
	login,
	password,
	...userData
});

const logOut = () => ({
	type: LOGOUT
});



// Показывает сообщение об удачном заходе в аккаунт.
const showSucces = () => (
);
// Показывает сообщение об неудаче залогиниться.
const showFailure = () => (
);

const tryLogin = (login, password) => {
	// return fetch('')
};

