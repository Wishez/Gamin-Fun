import React, {Component} from 'react';
import {Container } from 'semantic-ui-react';
import UserPanelContainer from './UserPanelContainer';
import PropTypes from 'prop-types';
import Title from './../components/Title';
import SingleNews from './../components/SingleNews';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeSiteIfNeeded } from './../actions/selectedSiteActions.js';

class SingleNewsContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		isLogged: PropTypes.bool.isRequired,
		news: PropTypes.array.isRequired,
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
		const { newsId } = this.props.match.params;
		const { news, site } = this.props;

		return (
			<div className='contentWrapper'>
				<UserPanelContainer {...this.props} />
				<Container>
					<SingleNews site={site}
						singleNews={news[newsId]} />	
				</Container>
			</div>
		)
	}
}

const mapStateToProps = state => {
  const { 
    selectedSite,
    dataBySite
  } = state;

  const {
    news,
    isLogged
  } = dataBySite[selectedSite];
  
  return {
    news,
    site: selectedSite,
    isLogged
  };
}

export default withRouter(connect(mapStateToProps)(SingleNewsContainer));
