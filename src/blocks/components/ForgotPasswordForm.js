import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'semantic-ui-react';
import RenderController from './RenderController';


const ForgotPasswordForm = ({
	submitForgotPasswordForm,
	handleSubmit
}) => (
	<form id='forgotPasswordForm'
		onSubmit={handleSubmit(submitForgotPasswordForm.bind(this))}
		className='forgotPasswordForm'>
		<Field component={RenderController}
			name='email'
			type='email'
			block='forgotPasswordFormController'
			placeholder='Ваш email'
		 />
	 	<Button content='Восстановить пароль'
	 		className='forgotPasswordForm__button submit' 
	 	/>	
	 </form>
);

export default reduxForm({
	form: 'forgotPasswordForm'
})(ForgotPasswordForm);
 
