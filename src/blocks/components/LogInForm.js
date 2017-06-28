import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const required = value => value ? undefined : 'Это поле обязательно';

const renderController = ({
	input,
	meta: {
		touched,
		error,
		warning
	},
	...rest
}) => (
	<div className='logInFormController'>
		<input {...input}
			{...rest}
			className='logInFormController__input' />
		 {touched && 
		 	((error && 
		 		<span className='logInFormController__error'>{error}</span>) || 
		 		(warning && <span className='logInFormController__error'>{warning}</span>))}
	</div>
);

const LogInForm = ({
	submitLogInForm,
	account,
	handleSubmit
}) => (
	<form id='logInForm'
		onSubmit={handleSubmit(submitLogInForm.bind(this))}
		className='logInForm'>
			<Field component={renderController}
				name='login'
				type='text'
				validate={[required]}
				placeholder='Логин/Login'
				maxLength='75'
			 />
			 <Field component={renderController}
			 	name='password'
			 	type='password'
				validate={[required]}
				placeholder='Пароль/Password'
				maxLength='75'
			 />
			 <div className='logInFormButtons'>
			 	<Button className='logInFormButtons__button logInFormButtons__button--submit submit' 
			 	   	content='Войти'
			 	/>
			 	<Link to='/register'
			 		className='logInFormButtons__button logInFormButtons__button--register'>
			 		Регистрация
			 	</Link>
			 	<br/>
			 	<Link to='/remember_password'
			 		className='logInFormButtons__forgotPass'>
			 		Забыли пароль?
			 	</Link>
			 </div>
		</form>
);


export default reduxForm({
	form: 'logInForm'
})(LogInForm);
 
