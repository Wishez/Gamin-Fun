import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'semantic-ui-react';
import RenderController from './RenderController';


const RecoverPasswordFrom = ({
	submitRecoverPasswordForm,
	handleSubmit,
	recoverPasswordMessage
}) => (
	<form id='forgotPasswordForm'
		onSubmit={handleSubmit(submitRecoverPasswordForm.bind(this))}
		className='forgotPasswordForm'>
		<Field component={RenderController}
			name='email'
			type='email'
			block='forgotPasswordFormController'
			placeholder='Ваш email'
		 />
		 <br />
		 {recoverPasswordMessage ? 
			<strong className='formError'>{recoverPasswordMessage}</strong> : ''}
	 	<Button content='Восстановить пароль'
	 		className='forgotPasswordForm__button submit' 
	 	/>	
	 </form>
);

export default reduxForm({
	form: 'recoverPasswordFrom'
})(RecoverPasswordFrom);
 
