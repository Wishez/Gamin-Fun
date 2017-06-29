import React from 'react';
import Title from './Title';
import RegisterForm from './RegisterForm';

const Register = ({
	...rest,
	registered,
	message
}) => (
	<section className='register'>

		<Title block='register'
			text='Регистрация' 
		/>
 		<RegisterForm {...rest} />
	</section>
);
		// {registered ?
		// 	<p className='register__message register__message--succes'>
		// 		{message}
		// 	</p> :
		// }

export default Register;