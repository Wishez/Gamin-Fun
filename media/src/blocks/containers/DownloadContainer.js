import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import UserPanelContainer from './UserPanelContainer';
import Download from './../components/Download';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { withRouter } from 'react-router-dom';

class DownloadContainer extends Component {
	componentDidMount() {
	    changeHeightAwesomeBorder();
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