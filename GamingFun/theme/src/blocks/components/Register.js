import React from 'react';
import Title from './Title';
import RegisterForm from './RegisterForm';

const Register = ({
	registered,
	message,
	...rest
}) => (
	<section className='register'>

		<Title block='register'
			text='Регистрация' 
		/>
		{registered ?
			<p className='register__message register__message--succes'>
				{message}
			</p> :
 			<RegisterForm registerMessage={message} 
 				{...rest} />
		}
	</section>
);

export default Register;