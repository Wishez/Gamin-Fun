import { 
	PROCEED_TO_PAYMENT,
	SUCCESS_PAYNMENT,
	FAILURE_PAYNMENT
} from './../constants/robokassaTypes.js';
import customAjaxRequest from './../constants/ajax.js';

const proceedToPaynment = (
	data,
	robokassaMessage
) => ({
	type: PROCEED_TO_PAYMENT,
	data,
	robokassaMessage
});
const failurePaynment = (
	data,
	robokassaMessage
) => ({
	type: FAILURE_PAYNMENT,
	data,
	robokassaMessage
});
// Делает запрос к серверу и переводит пользователя на страницу
// оплаты платёжного агрегатор ー robokassa. Перевод пользователя
// происходит в django приложение robokassa. 
export const moveUserToPaynment = data => dispatch => {
	customAjaxRequest({
		url: '/payment/proceed_to_payment/',
		data: data,
		type: 'GET',
        processData: true,
        cache: true
 	});

	dispatch(proceedToPaynment(data, 'Перенаправление...'));
	// success не обрабатывается, потому что пользователь перенаправляется
	// на страницу другого сайта.
	return $.ajax({
		success: url => {
			window.location = url;
		},
		error: (xhr, errmsg, err) => {
			dispatch(failurePaynment(data, 'Внутренняя ошибка сервера'));
		}
	});
};