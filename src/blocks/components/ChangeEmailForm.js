import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'semantic-ui-react';
import RenderController from './RenderController';
import { required, email } from './../constants/validation.js';


const ChangeEmailForm = ({
	submitChangeEmailForm,
	handleSubmit
}) => (
	<form id='changeEmailForm'
		onSubmit={handleSubmit(submitChangeEmailForm.bind(this))}
		className='replanishBalanceForm'>
		<Field component={RenderController}
			name='newEmail'
			type='email'
			block='changeEmailFormController'
			validate={[required, email]}
			placeholder='Новый email'
		 />
		 <Field component={RenderController}
			name='password'
			type='password'
			block='changeEmailFormController'
			validate={[required]}
			placeholder='Пароль'
		 />
	 	<Button content='Сохранить'
	 		className='changeEmailForm__button submit' 
	 	/>	
	 </form>
);


export default reduxForm({
	form: 'changeEmailForm'
})(ChangeEmailForm);
 
