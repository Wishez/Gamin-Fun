import React from 'react';
import Title from './Title';
import ForgotPasswordForm from './ForgotPasswordForm';

const ForgotPassword = ({
	...rest
}) => (
	<section className='forgotPassword'>
		<Title block='forgotPassword' 
			text='Восстановление пароля'
		/>
		<ForgotPasswordForm {...rest} />
	</section>
); 

export default ForgotPassword;