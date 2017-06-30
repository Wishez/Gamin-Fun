import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Checkbox } from 'semantic-ui-react';
import RenderController from './RenderController';
import ReactHtmlParser from 'react-html-parser'

const required = value => value ? undefined : 'Это поле обязательно';
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Неправильный e-mail адрес' : undefined;
const login = value => value && /^[a-z0-9_-]{0,16}$/i.test(value) ? undefined :
	'Вы можете использовать символы "_-", латинские буквы A-Za-z и цифры 0-9.'
const logingLength = value => value && !(value.length < 3) ? undefined :
	'Логин должен быть не меньше 3 символов и не больше 24.';
const passwordLength = value => value && value.length > 8? undefined :
	'Минимальная длина пароля — 8 символов. Максимальная — 30 символов.';

const RegisterForm = ({
	submitRegisterForm,
	account,
	handleSubmit,
	registered,
	message,
	allowRegister,
	knowRules
}) => (
	<form id='registerForm'
		onSubmit={handleSubmit(submitRegisterForm.bind(this))}
		className='registerForm'>
		<Field component={RenderController}
			name='login'
			type='text'
			block='registerFormController'
			validate={[required, login, logingLength]}
			placeholder='Логин/Login'
			maxLength='24'
		 />
		 <Field component={RenderController}
		 	name='password'
		 	type='password'
		 	block='registerFormController'
			validate={[required, passwordLength]}
			placeholder='Пароль/Password'
			maxLength='30'
		 />
		 <Field component={RenderController}
		 	name='repeatedPassword'
		 	type='password'
		 	block='registerFormController'
			validate={[required]}
			placeholder='Повторить пароль/Repeat password'
			maxLength='30'
		 />
		 <Field component={RenderController}
		 	name='email'
		 	type='email'
		 	block='registerFormController'
			validate={[required, email]}
			placeholder='Email'
			maxLength='100'
		 />
		 <div className='registerFormController'>
			 <Checkbox onClick={allowRegister}
			 	className='registerFormController__check'
			    label={ReactHtmlParser(
			 	'Вы ознакомились с <a href="http://localhost:9000/" class="not-follow">правилами</a> проекта')} />
		 </div>
		 <div className='registerFormButtons'>
		 	<Button disabled={!knowRules}
		 		className='registerFormButtons__button registerFormButtons__button--submit submit' 
		 	   	content='Зарегистрироваться'
		 	/>
		 </div>
	</form>
);


export default reduxForm({
	form: 'registerForm'
})(RegisterForm);
 
