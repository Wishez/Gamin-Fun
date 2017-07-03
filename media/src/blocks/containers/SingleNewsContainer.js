import React, {Component} from 'react';
import {Container } from 'semantic-ui-react';
import UserPanelContainer from './UserPanelContainer';
import PropTypes from 'prop-types';
import Title from './../components/Title';
import SingleNews from './../components/SingleNews';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { withRouter } from 'react-router-dom';

class SingleNewsContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		isLogged: PropTypes.bool.isRequired,
		news: PropTypes.array.isRequired,
		match: PropTypes.object.isRequired
	}
	componentDidMount() {
	    changeHeightAwesomeBorder();
    }

    componentDidUpdate() {
       
       changeHeightAwesomeBorder();
    }
	render() {
		const { newsId } = this.props.match.params;
		const { news } = this.props;
		console.log(this.props.match);
		return (
			<div className='contentWrapper'>
				<UserPanelContainer {...this.props} />
				<Container>
					<SingleNews singleNews={news[newsId - 1]} />	
				</Container>
			</div>
		)
	}
}

export default withRouter(SingleNewsContainer);