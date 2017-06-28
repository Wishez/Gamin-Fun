import React, {Component} from 'react';
import {Container } from 'semantic-ui-react';
import UserPanelContainer from './UserPanelContainer';
import PropTypes from 'prop-types';
import Title from './../components/Title';
import NewsList from './../components/NewsList';

export default class NewsContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired
		// newsList: PropTypes.array.isRequired
	}

	render() {

		const text = '<p>В теле новости будет размещаться информация для игрока, к примеру, о технических' +
					  'неполадках сервера. Или же информировать игрока о нововведениях на  сервере.</p>' +
					  '<p>Новость можно будет расскрывать для того, чтобы ощутить её полный объём. Это' +
					  ' всего-лишь небольшое интро, интригующее игрока.</p>';
		const newsList = [
			{
				id: 1,
				title: 'Интро',
				text:  text,
				created_at: '23.06.2017, 11:50'
			},
			{
				id: 2,
				title: 'Интро',
				text: text,
				created_at: '23.06.2017, 11:50'
			},
			{
				id: 3,
				title: 'Интро',
				text:  text,
				created_at: '23.06.2017, 11:50'
			}
		];

		return (
			<div className='contentWrapper'>
				<UserPanelContainer {...this.props} />
				<Container>
					<Title block='contentWrapper' 
						text='Новости'
					/>
					<NewsList newsList={newsList} />	
				</Container>
			</div>
		)
	}
}