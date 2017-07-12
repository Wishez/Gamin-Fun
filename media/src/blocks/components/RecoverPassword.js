import React from 'react';
import Title from './Title';
import RecoverPasswordForm from './RecoverPasswordForm';

const RecoverPassword = ({
	...rest
}) => (
	<section className='forgotPassword'>
		<Title block='forgotPassword' 
			text='Восстановление пароля'
		/>
		<RecoverPasswordForm {...rest} />
	</section>
); 

export default RecoverPassword;