import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import RenderController from './RenderController';
import { required } from './../constants/validation.js';


const LogInForm = ({
	submitLogInForm,
	account,
	handleSubmit,
	message,
	site,
	isLogining
}) => (
	<form id='logInForm'
		onSubmit={handleSubmit(submitLogInForm.bind(this))}
		className='logInForm'>
			<Field component={RenderController}
				name='username'
				type='text'
				block='logInFormController'
				validate={[required]}
				placeholder='Логин/Login'
				maxLength='75'
			 />
			 <Field component={RenderController}
			 	name='password'
			 	type='password'
			 	block='logInFormController'
				validate={[required]}
				placeholder='Пароль/Password'
				maxLength='75'
			 />
		 	{message ? <strong className='logInFormController__error'>{message}</strong> : ''}
			 <div className='logInFormButtons'>
			 	<Button className='logInFormButtons__button logInFormButtons__button--submit submit' 
			 	   	content='Войти'
			 	   	loading={isLogining}
			 	/>
			 	<Link to={`/${site}/registration`}
			 		className='logInFormButtons__button logInFormButtons__button--register'>
			 		Регистрация
			 	</Link>
			 </div>
		 	<Link to={`/${site}/remember_password`}
		 		className='logInFormButtons__forgotPass'>
		 		Забыли пароль?
		 	</Link>
		</form>
);


export default reduxForm({
	form: 'logInForm'
})(LogInForm);
 
