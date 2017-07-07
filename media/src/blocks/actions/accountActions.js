import { 
	LOGIN,
 	LOGOUT,
 	REGISTER, 
 	RECOVER_PASSWORD, 
 	CHANGE_EMAIL,
 	CHANGE_PASSWORD,
 	REPLANISH_BALANCE,
 	REQUEST_LOGIN_IN,
 	REQUEST_REGISTER,
 	SET_USER_TO_COOKIES
} from './../constants/actionTypes.js';
import { SubmissionError } from 'redux-form';
import customAjaxRequest from './../constants/ajax.js';
import dataBySite from './../reducers/dataBySite.js';
/* User
 * 
 * username
 * password
 * UserData will get to request to server as object.
 * { 
 * 	name: string,
 * 	sureface: string,
 * 	email:　string,
 * 	active_until,
 * 	status: date or string,
 * 	balance: number,
 * 	avatar: url  
 * }
 */
const logIn = (
	site,
	data,
	userData,
	isLogged,
	message
) => ({
	type: LOGIN,
	site,
	isLogged,
	registered: isLogged,
	username: data.username,
	password: data.password,
	userData: {
		...userData
	},
	message
});


const loggining = site => ({
	type: REQUEST_LOGIN_IN,
	site
});
// Аргумент data - это логин и пароль 
// входящего в свой аккаунт пользователя,
// используещего форму logInForm.
const setUserToCookies = (
	site,
	data
) => ({
	type: SET_USER_TO_COOKIES,
	site,
	username: data.username,
	password: data.password
});


// Меняет состояние на удачный заход пользователя в аккаунт
// userData - данные об аккаунте игрока на сайте.
const showLoginSucces = (site, data, userData, dispatch) => {
	dispatch(logIn(site, data, userData, true, ''));
	dispatch(setUserToCookies(site, data))
};

// Показывает сообщение об неудаче залогиниться.
const showLoginFailure = (site, dispatch, message) => {

	const data = {
		username: '',
		password: ''
	};
	// Меняется только сообщение в состояние аккаунта,
	// не устанавливая не правильно введённый или 
	// не подходящий логин с паролем.
	dispatch(logIn(site, data, {}, false, message));	
};

export const tryLogin = (site, data) => dispatch => {

	customAjaxRequest('/log_in/', data, 'GET');

	dispatch(loggining(site));

	return $.ajax({
		success: (userData) => {
			if (userData) {
				showLoginSucces(site, data, userData, dispatch);
			} else {
				showLoginFailure(site, dispatch);
			}

		},
		error: (xhr, errmsg, err) => {
			console.log('fail\n', err);
		}
	});
	// rp(options)
	// 	.then(userData => {

	// 		if (userData) {
	// 			console.log('userData ====>', userData);
	// 			showLoginSucces(site, data, userData, dispatch);
	// 		} else {
	// 			showLoginFailure(site, dispatch, 'Неправильные имя пользователя или пароль');
	// 		}
	// 	})
	// 	.catch(err => {
	// 		showLoginFailure(site, dispatch, 'Внутрення ошибка сервера');
	// 		console.log('fail\n', err);
	// 	});

};

// Функция захода в аккаун, если пользователь залогинился и в кэше остались данные
const logInIfMay = () => {

};

export const logOut = site => ({
	type: LOGOUT,
	site
});


export const register = (
	site,
	registered,
	registerMessage
) => ({
	type: REGISTER,
	registered: registered,
	registerMessage: registerMessage,
	site
});


// Показывает обработку регистрации.
const registering = site => ({
	type: REQUEST_REGISTER,
	site
});

const showRegisterSucces = (site, dispatch) => {
	const message = 'Вы успешно прошли регистрацию';
	console.log('dispatch to register with\n', message, site);
	dispatch(register(site, true, message));
	console.log('end');
};

// Показывает сообщение об неудаче залогиниться.
const showRegisterFailure = (site, dispatch, registeredResponse) => {
	// От полученного с сервера сообщени,
	// зависит сообщнение отображаемое пользователю
	// при неудачной регистрации.
	let registrMessage = '';
	if (registeredResponse === '') {
		registrMessage = 'Не подходящее имя пользователя';
	} else if (registeredRespond === 'Пароли не совпадают') {
		registrMessage = registeredRespond;
	} else {
		// Эта ошибка вряд ли появится.
		registrMessage = registeredResponse
	}

	dispatch(register(site, false, registrMessage));	
			
};

export const tryRegister = (site, data) => dispatch => {

	dispatch(registering(site));
	customAjaxRequest('/register/', data, 'POST');
	
    return $.ajax({
		success: (registeredResponse) => {
			console.log(registeredResponse === 'True', '\nregisteredResponse === \'True\'');
			// При не совпадение паролей выкидывается ошибка
			if (registeredResponse === 'True') {
				console.log('i\'m in success');
				showRegisterSucces(site, dispatch);
			} else {
				showRegisterFailure(site, dispatch, registeredResponse);
			}
		},
		error: (xhr, errmsg, err) => {
			console.log('fail\n', err);
		}
	});
}



