import React from 'react';
import { Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import RenderController from './RenderController';
import DropdownController from './DropdownController';
import { subsctibtionOptions } from './../constants/options.js';

const SubscribtionForm = ({
	submitSubscribtionForm,
	handleSubmit,
	onQuantityMothesChange
}) => (
	<form id='subscribtionForm'
		onSubmit={handleSubmit(submitSubscribtionForm.bind(this))}
		className='subscribtionForm'>
		<Field component={DropdownController}
			name='quantityMonthes'
			block='subscribtionFormController'
			placeholder='Количество месяцев'
			options={subsctibtionOptions}
		 />
	 	<Button content='Подписаться'
	 		className='subscribtionForm__button submit' 
	 	/>
	 </form>
);


export default reduxForm({
	form: 'subscribtionForm'
})(SubscribtionForm);
 
