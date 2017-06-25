import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'semantic-ui-react';
import crossDomainRequest from './../constants/crossDomainRequest.js';

const required = value => value ? undefined : 'Заполните, пожалуйста, это поле, и спасибо',
	  email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Неправильный e-mail адрес' : undefined;

const renderField = ({ input, type, label, meta: { touched, error, warning }, textarea, maxLength, placeholder}) => {
	let field;

	if (!textarea)
		field =	<input 
			{...input}
			type={type}
			placeholder={placeholder}
			className='connectFormController__item'
			maxLength={maxLength}
		/>
	else
	 	field = <textarea 
			{...input}
			type={type}
			placeholder={placeholder}
			className='connectFormController__item connectFormController-textarea'
			rows='5'
			maxLength={maxLength}
		/>

	return (
		<div className='connectFrom__connectFormController connectFormController'>
			<label
				htmlFor={name}
				className='connectFormController__label'>
				{label}
			</label>
			{field}
			{touched && ((error && <span className='connectFormController__error'>{error}</span>) || (warning && <span>{warning}</span>))}
		</div>	
	)
}


class ConnectForm extends Component  {

	submit(values, dispatch) {

		$.ajaxSetup({
			url: '/message/',
			type: 'POST',
			data: values,
			beforeSend(xhr, settings) {
				crossDomainRequest(xhr, settings, this);
			}
		});

		$.ajax({
			success: (respond) => {
				$('#connectForm').hide();
				$('.connectFormWrapper').append(respond);
			},
			error: (xhr, errmsg, err) => {
				console.log('fail\n', err);

			}
		});
	}

	render() {
		const { handleSubmit } = this.props;
		return (
				<form 
					id='connectForm' 
					className='connectForm'
					method='post'
					onSubmit={handleSubmit(this.submit.bind(this))}>
					<Field 
						name='name'
						type='text'
						component={renderField}
						label='Имя'
						maxLength='120'
						validate={[ required ]}
						placeholder='Ф.И.О'
					/>
					<Field 
						name='email'
						type='email'
						component={renderField}
						label='E-mail'
						maxLength='70'
						validate={[ required, email ]}
						placeholder='ihave@greatimagination.ru'
					/>
					<Field 
						name='message'
						type='text'
						textarea={true}
						component={renderField}
						label='Сообщение'
						maxLength='500'
						validate={[ required ]}
						placeholder='Напишите, что вы хотели бы обсудить'
					/>
					<Button className='connectForm__btn submit'
						content='Отправить'
						icon='send'
						labelPosition='left'
					/>
				</form>
		);
	}
}

// function fixString(string) {

// 	return string
// 		.replace(new RegExp(/[\s\d,\-\.!@#$%^&*_\\\/'";:\]\[{}~`]/, 'g'), '')
// 		.replace(string[0], string[0].toUpperCase())
// 		.replace(string.slice(1), string.slice(1).toLowerCase());
// }

export default reduxForm({
  form: 'connectForm'
})(ConnectForm);