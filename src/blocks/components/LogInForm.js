import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const required = value => value ? undefined : 'Это поле &mdash; обязательно';

const renderController = ({
	input,
	meta: {
		touched,
		error,
		warning
	}

}) => (
	<div className='logInFormController'>
		<input {...input}
			 className='logInFormController__input' />
		 {touched && 
		 	((error && 
		 		<span className='c'>{error}</span>) || 
		 		(warning && <span className='logInFormController__error'>{warning}</span>))}
	</div>
);

const LogInForm = ({
	submitLogInForm
}) => (
	<form id='logInForm'
		onSubmit={submitLogInForm}
		className='logInForm'>
			<Field component={renderController}
				name='login'
				validate={[required]}
				placeholder='Логин/Login'
				maxLength='75'
			 />
			 <Field component={renderController}
			 	name='password'
				validate={[required]}
				placeholder='Пароль/Password'
				maxLength='75'
			 />
			 <div className='logInFormButtons'>
			 	<Button className='logInFormButtons__button logInFormButtons__button--submit' 
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
	form: 'LogInForm'
})(LogInForm);