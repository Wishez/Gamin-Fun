import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Checkbox } from 'semantic-ui-react';
import RenderController from './RenderController';
import ReactHtmlParser from 'react-html-parser'
import { 
	required,
 	passwordLenght,
 	login,
 	loginLength,
 	passwordLength,
 	password,
 	email,
 	nameValidation,
 	surnameLength,
 	nameLength
} from './../constants/validation.js';

const RegisterForm = ({
	submitRegisterForm,
	account,
	handleSubmit,
	error,
	allowRegister,
	knowRules,
	isRegistering,
	site,
	registerMessage
}) => (
	<form id='registerForm'
		onSubmit={handleSubmit(submitRegisterForm.bind(this))}
		className='registerForm'>
		<Field component={RenderController}
			name='username'
			type='text'
			block='registerFormController'
			validate={[required, login, loginLength]}
			placeholder='Логин/Login'
			maxLength='24'
		 />
		 { site == 'samp' ?
		 	<Field component={RenderController}
				name='name'
				type='text'
				block='registerFormController'
				validate={[required, nameValidation]}
				placeholder='Имя/Name'
				maxLength='20'
		 	/> : ''
		 }
		 { site == 'samp' ? <Field component={RenderController}
				name='surname'
				type='text'
				block='registerFormController'
				validate={[required, nameValidation, surnameLength]}
				placeholder='Фамилия/Surname'
				maxLength='25'
		 	/> : ''
		 }
		 <Field component={RenderController}
		 	name='password'
		 	type='password'
		 	block='registerFormController'
			validate={[required, passwordLength, password]}
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
			 	'Вы ознакомились с <a href=`/${site}/rules/` class="not-follow">правилами</a> проекта')} />
		 </div>
		 <div className='registerFormButtons'>
			{registerMessage ? <strong className='formError'>{registerMessage}</strong> : ''}
			<br />
		 	<Button disabled={!knowRules}
		 		loading={isRegistering}
		 		className='registerFormButtons__button registerFormButtons__button--submit submit' 
		 	   	content='Зарегистрироваться'
		 	/>
		 </div>
	</form>
);


export default reduxForm({
	form: 'registerForm'
})(RegisterForm);
 
