import React, { select } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Dropdown } from 'semantic-ui-react';
import RenderController from './RenderController';

const DropdownController = props => (
	<div className={props.block}>
		<Dropdown selection {...props.input}
			value={props.input.value}
			onChange={(param, data) => props.input.onChange(data.value)}
			{...props.rest}
		/>
	</div>
);

const subsctibtionOptions = [
	 { key: '1', value: '1', text: '1 месяц' },
	 { key: '3', value: '1', text: '3 месяца' },
	 { key: '5', value: '1', text: '5 месяцев' },
	 { key: '6', value: '1', text: '6 месяцев (6% скидка)' },
	 { key: '12', value: '1', text: '12 месяцев (13% скидка)' }
];

const SubscribtionForm = ({
	submitSubscribtionForm,
	handleSubmit
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
 
