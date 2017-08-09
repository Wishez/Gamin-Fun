import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'semantic-ui-react';
import RenderController from './RenderController';
import { 
	required,
	passwordLength,
	password 
} from './../constants/validation.js';


const ChangePasswordForm = ({
	submitChangePassword,
	handleSubmit,
	changePasswordMessage,
	isChanging
}) => (
	<form id='сhangePasswordForm'
		onSubmit={handleSubmit(submitChangePassword.bind(this))}
		className='replanishBalanceForm'>
		<Field component={RenderController}
			name='oldPassword'
			type='password'
			block='сhangePasswordFormController'
			validate={[required]}
			placeholder='Старый пароль'
			maxLength='30'
		 />
		 <Field component={RenderController}
			name='newPassword'
			type='password'
			block='сhangePasswordFormController'
			validate={[required, passwordLength, password]}
			placeholder='Новый пароль'
			maxLength='30'
		 />
		 <Field component={RenderController}
			name='newPasswordRepeated'
			type='password'
			block='сhangePasswordFormController'
			validate={[required]}
			placeholder='Повторите новый пароль'
			maxLength='30'
		 />
		{changePasswordMessage ? 
			<strong className='formError'>{changePasswordMessage}</strong> : ''}
		<br />
	 	<Button loading={isChanging}
	 		content='Сохранить'
	 		className='сhangePasswordForm__button submit' 
	 	/>	
	 </form>
);


export default reduxForm({
	form: 'сhangePasswordForm'
})(ChangePasswordForm);
 
