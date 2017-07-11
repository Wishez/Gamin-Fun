import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import UserPanelContainer from './UserPanelContainer';
import Download from './../components/Download';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { withRouter } from 'react-router-dom';
import { changeSite } from './../actions/selectedSiteActions.js';
import { changeSiteIfNeeded } from './../actions/selectedSiteActions.js';
// match: PropTypes.object.isRequired,
// 		dispatch: PropTypes.func.isRequired
class DownloadContainer extends Component {
	componentDidMount() {
		// const { dispatch } = this.props;
	    changeHeightAwesomeBorder();
    	// dispatch(changeSite(site));
    }

    componentDidUpdate() {
       changeHeightAwesomeBorder();
    }
	
	render() {
		return(
			<div className='contentWrapper'>
				<UserPanelContainer />
				<Container>
					<Download />
				</Container>
			</div>
		);
	}
}

export default withRouter(DownloadContainer);