import React, {Component} from 'react';
import Rules from './../components/Rules';
import UserPanelContainer from './UserPanelContainer';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { withRouter } from 'react-router-dom';
import { selectNavigationItem } from './../actions/navigationActions.js';
import { connect } from 'react-redux';
import { changeSiteIfNeeded } from './../actions/selectedSiteActions.js';

class RulesContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		match: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(selectNavigationItem('fourthNavItem'));
		// В измениние стилей сайта при первой загрузки сайта,
		// проверяется выбранный сайт.
		changeSiteIfNeeded(this.props); 
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

const mapStateToProps = state => {
	const {
		selectedSite
	} = state;

	return {
		site: selectedSite
	}
};

export default withRouter(connect(mapStateToProps)(RulesContainer));