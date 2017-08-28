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
 	SET_USER_TO_COOKIES,
 	REQUEST_IN_PERSONAL_ROOM,
 	SUBSCRIBE,
 	CHANGE_USER_AVATAR
} from './../constants/actionTypes.js';
import customAjaxRequest from './../constants/ajax.js';
import dataBySite from './../reducers/dataBySite.js';
import { convertDate } from './../constants/pureFunctions.js';
import request from 'superagent';
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
	message,
	registerMessage
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
	message,
	registerMessage
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

// Делает запрос на сервер, после изменяет состояние приложения
// в зависимости от ответа сервера.
export const tryLogin = (site, data) => dispatch => {
	const empty_data = {
				username: '',
				password: ''
			};
	// const username = data.username;
	// const password = data.password;
	// Проверка на незаполненные данные.
	// if (!username && !password)
	// 	dispatch(logIn(site, data, {}, false, 'Ввеедите логин и пароль', ''));	
	// else if (!username)
	// 	dispatch(logIn(site, empty_data, {}, false, 'Введите имя пользователя', ''));	
	// else if (!password)
	// 	dispatch(logIn(site, empty_data, {}, false, 'Введите пароль', ''));	
	// else

	dispatch(loggining(site));
	data.site = site;

	customAjaxRequest({
		url: '/log_in/',
		data: data,
		type: 'GET',
        processData: true,
        cache: true
	});

	return $.ajax({
		success: (userData) => {
			if (userData) {
				// Меняет состояние на удачный заход пользователя в аккаунт
				dispatch(logIn(site, data, userData, true, '', 'Да прибудет с вами сила!'));
				dispatch(setUserToCookies(site, data))
			} else {
				// Меняется только сообщение в состояние аккаунта,
				// не устанавливая неправильно введённый или 
				// не подходящий логин с паролем.
				dispatch(logIn(site, empty_data, {}, false, 'Неправильный логин или пароль', ''));	
			}

		},
		error: (xhr, errmsg, err) => {
			dispatch(logIn(
				site,
				empty_data, 
				{},
				false, 
				'Внутренняя ошибка сервера',
				''
			));	
		}
	});
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


export const tryRegister = (site, data) => dispatch => {
	
	dispatch(registering(site));

	data.site = site;

	customAjaxRequest({
		url: '/register/',
		data: data,
		type: 'POST',
		processData: true,
		cache: true
	});

    return $.ajax({
		success: (registerMessage) => {
		
			// Сервер возвращает Вы успешно прошли регистрацию, если пользователь успешно зарегистрировался.
			// В остальных случаях он возвращает другое сообщение.
			if (registerMessage === 'Вы успешно прошли регистрацию') {
				dispatch(register(site, true, registerMessage));
			} else {
				dispatch(register(site, false, registerMessage));
			}
		},
		error: (xhr, errmsg, err) => {
			console.log('fail\n', err);
			dispatch(register(site, false, 'Внутренняя ошибка сервера'));
		}
	});
}


const changing = (
	site
) => ({
	type: REQUEST_IN_PERSONAL_ROOM,
	site
});


const changePassword = (
	site,
	changePasswordMessage,
	password
) => ({
	type: CHANGE_PASSWORD,
	site,
	changePasswordMessage,
	password
});

export const tryChangeAccountPassword = (site, data) => dispatch => {
	// Показывает обработку изменения пароля
	dispatch(changing(site));
	// Не делает запрос на сервер, если текущий пароль введён не правильно.
	const oldPassword = data.oldPassword;
	const newPassword = data.newPassword;

	if (data.currentPassword !== oldPassword) {
		dispatch(changePassword(
			site, 
			'Неправильный текущий пароль', 
			oldPassword
		));
		return false;
	} else if (newPassword !== data.newPasswordRepeated) {
		// Проверяется совпадение паролей.
		dispatch(changePassword(
			site, 
			'Пароли не совпадают', 
			oldPassword
		));
		return false;
	} else

	customAjaxRequest({
		url: '/change_password/',
		data: data,
		type: 'POST',
		cache: true
	});
	
    return $.ajax({
		success: (changePasswordMessage) => {
			dispatch(changePassword(
				site,
				changePasswordMessage, 
				newPassword
			));
			dispatch(setUserToCookies(
				site,
				{
					username: data.username,
					password: newPassword
				}
			));
		},
		error: (xhr, errmsg, err) => {
			dispatch(changePassword(
				site,
			 	'Внутрянняя ошибка сервера',
			 	oldPassword
			 ));
		}
	});
};

const changeEmail = (
	site,
	changeEmailMessage,
	email
) => ({
	type: CHANGE_EMAIL,
	site,
	changeEmailMessage,
	email
});

export const tryChangeAccountEmail = (site, data) => dispatch => {
	dispatch(changing(site));
	const oldEmail = data.oldEmail;
	if (data.currentPassword !== data.password) {
		dispatch(changeEmail(site, 'Неправильный пароль', oldEmail));
		return false;
	}

	customAjaxRequest({
		url: '/change_email/',
		data: data,
		type: 'POST',
		cache: true
	});
	
    return $.ajax({
		success: (changeEmailMessage) => {
			dispatch(changeEmail(
				site, 
				changeEmailMessage, 
				data.newEmail
			));
		},
		error: (xhr, errmsg, err) => {
			dispatch(changeEmail(
				site, 
				'Внутрянняя ошибка сервера', 
				oldEmail
			));
		}
	});
};

const subscribe = (
	site,
	subscribeMessage,
	userData
) => ({
	type: SUBSCRIBE,
	site,
	subscribeMessage,
	userData: {
		...userData
	}
});


export const trySubscribeAccount = (site, data) => dispatch => {
	dispatch(changing(site));
	// Серверному сценарию нужно знать о сайте, с которого идёт запрос.
	data.site = site;

	customAjaxRequest({
		url: '/subscribe/',
		data: data,
		type: 'POST',
		processData: true,
		cache: true
	});
	
    return $.ajax({
		success: data => {
			// Копируется сообщение.
			const subscribeMessage = data.message;
			// Удаляется сообщение из возвращенных данных, которые будут распляться
			// в объект userData  - данные об аккаунте пользователя.
			delete data.message;
			// Преобразование даты в более читаем формат.
			data.activeUntil = convertDate(data.activeUntil);
			dispatch(subscribe(site, subscribeMessage, data));
		},
		error: (xhr, errmsg, err) => {
			dispatch(subscribe(site, 'Внутрянняя ошибка сервера'));
		}
	});
};

export const tryReplanishAccountBalance = (site, data) => dispatch => {

};

const changeUserAvatar = (
	site, 
	avatar
) => ({
	type: CHANGE_USER_AVATAR,
	site,
	userData: {
		avatar: avatar
	}
});

export const tryChangeUserAvatar = (site, data) => dispatch => {
	let validData = new FormData();
	validData.append('site', site);
	validData.append('username', data.username);
	validData.append('newAvatar', data.newAvatar);

	customAjaxRequest({
		url: '/change_user_avatar/',
		data: validData, 
		type: 'POST',
		dataType: 'json',
        processData: false, 
       	contentType: false
    });


	return $.ajax({
		success: response => {
			dispatch(changeUserAvatar(site, response.avatar))
		},
		error: (xhr, errmsg, err) => {
			console.log('err ====>', err);
			dispatch(changeUserAvatar(site, data.oldAvatar))
		}
	});
};

const recoverPassword = (
	site,
	recoverPasswordMessage
) => ({
	type: RECOVER_PASSWORD,
	site,
	recoverPasswordMessage
});

export const tryRecoverPassword = (site, data) => dispatch => {
	dispatch(changing(site));
	data.site = site;

	customAjaxRequest({
		url: '/recover_password/',
		data: data,
		type: 'POST',
		processData: true
	});

	return $.ajax({
		success: responseMessage => {
			dispatch(recoverPassword(site, responseMessage));
		},
		error: (xhr, errmsg, err) => {
			dispatch(recoverPassword(site, 'Внутренняя ошибка сервера'));
			console.log('failure ======>\n', err);
		}
	});
};