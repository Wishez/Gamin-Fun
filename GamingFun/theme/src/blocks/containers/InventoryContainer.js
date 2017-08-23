import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ContentWrapperContainer from './ContentWrapperContainer';
import Register from './../components/Register';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { tryRegister } from './../actions/accountActions.js';
import { changeSiteIfNeeded } from './../actions/selectedSiteActions.js';
import { selectNavigationItem } from './../actions/navigationActions.js';


class InventoryContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		dispatch: PropTypes.func.isRequired,
		location: PropTypes.object.isRequired
	}
	// Переменная для чек-бокса.


	customViewComponent = () => {
		const { dispatch, location } = this.props;
		dispatch(selectNavigationItem('secondNavItem'));
		changeSiteIfNeeded(this.props);
        changeHeightAwesomeBorder('/registration', location.pathname);
	}

	componentDidMount() {
		this.customViewComponent();
    }

    componentDidUpdate() {
    	this.customViewComponent();
    }

	
	render() {
		return (
			<ContentWrapperContainer>
				<div>Это ваш инвентарь. Здесь(пока что)ничего нет.</div>
			</ContentWrapperContainer>
		);
	}
}

const mapStateToProps = state => {
	const { 
     selectedSite
    } = state;

	return {
		site: selectedSite
	};
}

export default withRouter(connect(mapStateToProps)(InventoryContainer));