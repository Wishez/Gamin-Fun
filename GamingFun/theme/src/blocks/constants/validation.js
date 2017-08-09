export const required = value => value ? undefined : 'Это поле обязательно';
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Неправильный e-mail адрес' : undefined;
export const login = value => value && /^[a-z0-9_-]{0,16}$/i.test(value) ? undefined :
	'Вы можете использовать символы "_-", латинские буквы A-Za-z и цифры 0-9.';
export const loginLength = value => value && !(value.length < 3) ? undefined :
	'Логин должен быть не меньше 3 символов и не больше 24.';
export const passwordLength = value => value && value.length > 8 ? undefined :
	'Минимальная длина пароля — 8 символов. Максимальная — 30 символов.';

export const password = value => value && /^[a-z0-9_-]{0,30}$/i.test(value) ? undefined :
	'Вы можете использовать символы "_-", латинские и кириллические буквы А-Яа-яA-Za-z, также цифры 0-9.';


export const nameValidation = value => value && /^[a-z]+$/i.test(value) ? undefined :
	'Используйте латинские буквы верхнего и нижнего регистра — a-zA-Z .';

export const surnameLength = value => value && !(value.length < 2) ? undefined :
	'Фамилия должна  быть не меньше 2 символов и не больше 25.';
export const nameLength = value => value && !(value.length < 2) ? undefined :
	'Имя должно быть не меньше 2символов и не больше 20.';