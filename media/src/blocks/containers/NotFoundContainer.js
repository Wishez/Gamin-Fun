import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import UserPanelContainer from './UserPanelContainer';
import PropTypes from 'prop-types';
import NotFound from './../components/NotFound';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { withRouter } from 'react-router-dom';
import { changeSiteIfNeeded } from './../actions/selectedSiteActions.js';
// match: PropTypes.object.isRequired,
// 		dispatch: PropTypes.func.isRequired
 class NotFoundContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		isLogged: PropTypes.bool.isRequired,
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
				<UserPanelContainer {...this.props} />
				<Container>
					<NotFound {...this.props} />
				</Container>
			</div>
		);
	}
}

export default withRouter(NotFoundContainer);