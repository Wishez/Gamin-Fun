import React from 'react';
import ReactHtmlParser from 'react-html-parser'
import ReplanishBalanceForm from './ReplanishBalanceForm';
import SubscribtionForm from './SubscribtionForm';
import Title from './Title';
import ChangePasswordForm from './ChangePasswordForm';
import ChangeEmailForm from './ChangeEmailForm';


// const required = value => value ? undefined : 'Это поле обязательно';
// const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Неправильный e-mail адрес' : undefined;
// const login = value => value && /^[a-z0-9_-]{0,16}$/i.test(value) ? undefined :
// 	'Вы можете использовать символы "_-", латинские буквы A-Za-z и цифры 0-9.'
// const logingLength = value => value && !(value.length < 3) ? undefined :
// 	'Логин должен быть не меньше 3 символов и не больше 24.';
// const passwordLength = value => value && value.length > 8? undefined :
// 	'Минимальная длина пароля — 8 символов. Максимальная — 30 символов.';

const PersonalRoom = ({
	submitChangePassword,
	submitReplanishBalance,
	submitSubscribtionForm,
	submitChangeEmailForm
}) => (
	<section className='personalRoom'>
		<div className='replanishBalance'>
			<Title block='replanishBalance'
				text='Пополнить баланс' />
			<p className='replanishBlance__description'>
				1 рубль = 1 кредит
			</p> 
			<ReplanishBalanceForm
				submitReplanishBalance={submitReplanishBalance} />
		</div>
		<div className='subscribe'>
			<Title block='subscribe'
				text='Подписаться на сервер' />
			<p className='replanishBlanceForm__description'>
				1 месяц = 200 кредитов(будет динамическое обновление)
			</p> 	
			<SubscribtionForm
				submitSubscribtionForm={submitSubscribtionForm} />
		</div>
		<div className='changePassword'>
			<Title block='changePassword'
				text='Сменить пароль' />
			<ChangePasswordForm submitChangePassword={submitChangePassword} /> 
		</div>
		<div className='changeEmail'>
			<Title block='changeEmail'
				text='Сменить email' />
			<ChangeEmailForm submitChangeEmailForm={submitChangeEmailForm} />
		</div>
	</section>
);


export default PersonalRoom;
