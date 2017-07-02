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
	error,
	site
}) => (
	<form id='logInForm'
		onSubmit={handleSubmit(submitLogInForm.bind(this))}
		className='logInForm'>
			<Field component={RenderController}
				name='login'
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
			 <div className='logInFormButtons'>
			 	<Button className='logInFormButtons__button logInFormButtons__button--submit submit' 
			 	   	content='Войти'
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
		 	{error ? <strong>{error}</strong> : ''}
		</form>
);


export default reduxForm({
	form: 'logInForm'
})(LogInForm);
 
