import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Checkbox } from 'semantic-ui-react';
import RenderController from './RenderController';

const ReplanishBalanceForm = ({
	submitReplanishBalance,
	handleSubmit
}) => (
	<form id='replanishBalanceForm'
		onSubmit={handleSubmit(submitReplanishBalance.bind(this))}
		className='replanishBalanceForm'>
		<Field component={RenderController}
			name='quantityCredits'
			type='number'
			min='1'
			max='1000000'
			block='replanishBalanceFormController'
			placeholder='Количество кредитов'
		 />
	 	<Button content='Пополнить'
	 		className='replanishBalanceForm__button submit' 
	 	/>	
	 </form>
);


export default reduxForm({
	form: 'replanishBalanceForm'
})(ReplanishBalanceForm);
 
