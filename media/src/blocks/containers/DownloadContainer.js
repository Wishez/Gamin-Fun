import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import UserPanelContainer from './UserPanelContainer';
import Download from './../components/Download';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { withRouter } from 'react-router-dom';

class DownloadContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		isLogged: PropTypes.bool.isRequired
	}
	componentDidMount() {
        console.log('Did mount')
	    changeHeightAwesomeBorder();
    }

    componentDidUpdate() {
       console.log('Did update')
       changeHeightAwesomeBorder();
    }
	
	render() {
		return(
			<div className='contentWrapper'>
				<UserPanelContainer {...this.props} />
				<Container>
					<Download {...this.props} />
				</Container>
			</div>
		);
	}
}

export default withRouter(DownloadContainer);