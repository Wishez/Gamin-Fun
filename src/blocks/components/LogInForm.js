import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import RenderController from './RenderController';

const required = value => value ? undefined : 'Это поле обязательно';

const LogInForm = ({
	submitLogInForm,
	account,
	handleSubmit,
	error
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
			 	<Link to='/registration'
			 		className='logInFormButtons__button logInFormButtons__button--register'>
			 		Регистрация
			 	</Link>
			 </div>
		 	<Link to='/remember_password'
		 		className='logInFormButtons__forgotPass'>
		 		Забыли пароль?
		 	</Link>
		 	{error ? <strong>{error}</strong> : ''}
		</form>
);


export default reduxForm({
	form: 'logInForm'
})(LogInForm);
 
