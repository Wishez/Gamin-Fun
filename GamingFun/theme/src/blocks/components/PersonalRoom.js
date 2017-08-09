import React from 'react';
import ReactHtmlParser from 'react-html-parser'
import ReplanishBalanceForm from './ReplanishBalanceForm';
import SubscribtionForm from './SubscribtionForm';
import Title from './Title';
import ChangePasswordForm from './ChangePasswordForm';
import ChangeEmailForm from './ChangeEmailForm';


const PersonalRoom = ({
	submitChangePassword,
	submitReplanishBalance,
	submitSubscribtionForm,
	submitChangeEmailForm,
	subscribeState,
	onQuantityMonthesChange,
	onChangeReplanishCost,
	replanishCost,
	...rest
}) => (
	<section className='personalRoom'>
		<div className='replanishBalance'>
			<Title block='replanishBalance'
				text='Пополнить баланс' />
			<p className='replanishBlance__description'>
				{replanishCost}
			</p> 
			<ReplanishBalanceForm
				submitReplanishBalance={submitReplanishBalance} 
				onChangeReplanishCost={onChangeReplanishCost}
				{...rest}/>
		</div>
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
