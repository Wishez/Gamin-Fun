import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Checkbox } from 'semantic-ui-react';
import RenderController from './RenderController';
import ReactHtmlParser from 'react-html-parser'

const required = value => value ? undefined : 'Это поле обязательно';
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Неправильный e-mail адрес' : undefined;
const login = value => value && /[a-zA-Z0-9\-_]+/ig.test(value) ? undefined :
	'Логин записывается без пробелов, латинскими буквами, со знаками "_-", остальное запрещено';
const RegisterForm = ({
	submitRegisterForm,
	account,
	handleSubmit,
	registered,
	message,
	allowRegister,
	knewRules
}) => (
	<form id='registerForm'
		onSubmit={handleSubmit(submitRegisterForm.bind(this))}
		className='registerForm'>
		<Field component={RenderController}
			name='login'
			type='text'
			block='registerFormController'
			validate={[required, login]}
			placeholder='Логин/Login'
			maxLength='24'
		 />
		 <Field component={RenderController}
		 	name='password'
		 	type='password'
		 	block='registerFormController'
			validate={[required]}
			placeholder='Пароль/Password'
			maxLength='75'
		 />
		 <Field component={RenderController}
		 	name='repeated_password'
		 	type='password'
		 	block='registerFormController'
			validate={[required]}
			placeholder='Повторить пароль/Repeat password'
			maxLength='75'
		 />
		 <Field component={RenderController}
		 	name='email'
		 	type='email'
		 	block='registerFormController'
			validate={[required, email]}
			placeholder='Email'
			maxLength='75'
		 />
		 <div className='registerFormController'>
			 <Checkbox onClick={allowRegister}
			 	className='registerFormController__check'
			    label={ReactHtmlParser(
			 	'Вы ознакомились с <a href="http://localhost:9000/" class="not-follow">правилами</a> проекта')} />
		 </div>
		 <div className='registerFormButtons'>
		 	<Button disabled={!knewRules}
		 		className='registerFormButtons__button registerFormButtons__button--submit submit' 
		 	   	content='Зарегистрироваться'
		 	/>
		 </div>
	</form>
);


export default reduxForm({
	form: 'registerForm'
})(RegisterForm);
 
