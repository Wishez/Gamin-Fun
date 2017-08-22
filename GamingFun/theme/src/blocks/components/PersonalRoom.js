import React from 'react';
import ReactHtmlParser from 'react-html-parser'
import ReplanishBalanceForm from './../containers/Robokassa';
import SubscribtionForm from './SubscribtionForm';
import Title from './Title';
import ChangePasswordForm from './ChangePasswordForm';
import ChangeEmailForm from './ChangeEmailForm';
import Robokassa from './../containers/Robokassa';

const PersonalRoom = ({
	submitChangePassword,
	submitSubscribtionForm,
	submitChangeEmailForm,
	subscribeState,
	onQuantityMonthesChange,
	replanishCost,
	email,
	username,
	...rest
}) => (
	<section className='personalRoom'>
		<Robokassa url={rest.site}
			InvDesc='Покупка кредитов'
			Email={email}
			username={username}
		/>
		<div className='subscribe'>
			<Title block='subscribe'
				text='Подписаться на сервер' />
			<p className='replanishBlanceForm__description'>
				{subscribeState}
			</p> 	
			<SubscribtionForm
				submitSubscribtionForm={submitSubscribtionForm}
				onQuantityMonthesChange={onQuantityMonthesChange}
				{...rest} />
		</div>
		<div className='changePassword'>
			<Title block='changePassword'
				text='Сменить пароль' />
			<ChangePasswordForm submitChangePassword={submitChangePassword}
				{...rest} /> 
		</div>
		<div className='changeEmail'>
			<Title block='changeEmail'
				text='Сменить email' />
			<ChangeEmailForm submitChangeEmailForm={submitChangeEmailForm} 
				{...rest} />
		</div>
	</section>
);


export default PersonalRoom;
