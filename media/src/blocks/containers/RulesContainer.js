import React, {Component} from 'react';
import Rules from './../components/Rules';
import UserPanelContainer from './UserPanelContainer';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { withRouter } from 'react-router-dom';

class RulesContainer extends Component {
	componentDidMount() {
	    changeHeightAwesomeBorder();
    }

    componentDidUpdate() {

       changeHeightAwesomeBorder();
    }
	render() {
		return (
			<div className='contentWrapper'>
				<UserPanelContainer />
				<Container>
					<Rules />
				</Container>
			</div>
		);
	}
}

export default withRouter(RulesContainer);