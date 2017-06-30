import React, { select } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Dropdown } from 'semantic-ui-react';
import RenderController from './RenderController';

const DropdownController = ({
	input,
	meta: {
		touched,
		error,
		warning
	},
	block,
	...rest
}) => (
	<div className={block}>
		<Dropdown className={`${block}__dropdown`}
			selection {...input}
			value={input.value}
			onChange={(param, data) => input.onChange(data.value)}
			{...rest}
		/>
	</div>
);

const subsctibtionOptions = [
	 { key: '1', value: '1', text: '1 месяц' },
	 { key: '3', value: '3', text: '3 месяца' },
	 { key: '5', value: '5', text: '5 месяцев' },
	 { key: '6', value: '6', text: '6 месяцев (6% скидка)' },
	 { key: '12', value: '12', text: '12 месяцев (13% скидка)' }
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
 
