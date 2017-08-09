import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import UserPanelContainer from './UserPanelContainer';
import PropTypes from 'prop-types';
import NotFound from './../components/NotFound';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { withRouter } from 'react-router-dom';
import { changeSiteIfNeeded } from './../actions/selectedSiteActions.js';
import { connect } from 'react-redux';

 class NotFoundContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		match: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired
	}

	componentDidMount() {
		changeSiteIfNeeded(this.props);
   	    changeHeightAwesomeBorder();
    }

    componentDidUpdate() {
    	changeSiteIfNeeded(this.props);
        changeHeightAwesomeBorder();
    }

	render() {
		return (
			<div className='contentWrapper'>
				<UserPanelContainer />
				<Container>
					<NotFound {...this.props}/>
				</Container>
			</div>
		);
	}
}
const mapStateToProps = state => {
	const { selectedSite } = state;
	return {
		site: selectedSite
	};
}

export default withRouter(connect(mapStateToProps)(NotFoundContainer));