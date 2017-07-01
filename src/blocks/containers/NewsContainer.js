import React, {Component} from 'react';
import {Container } from 'semantic-ui-react';
import UserPanelContainer from './UserPanelContainer';
import PropTypes from 'prop-types';
import Title from './../components/Title';
import NewsList from './../components/NewsList';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';

export default class NewsContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		isLogged: PropTypes.bool.isRequired,
		news: PropTypes.array.isRequired
	}
	componentDidMount() {
	    changeHeightAwesomeBorder();
    }

    componentDidUpdate() {
       changeHeightAwesomeBorder();
    }
	render() {


		return (
			<div className='contentWrapper'>
				<UserPanelContainer {...this.props} />
				<Container>
					<Title block='contentWrapper' 
						text='Новости'
					/>
					<NewsList newsList={this.props.news} />	
				</Container>
			</div>
		)
	}
}