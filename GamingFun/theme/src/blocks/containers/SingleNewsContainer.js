import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ContentWrapperContainer from './ContentWrapperContainer';
import SingleNews from './../components/SingleNews';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { changeSiteIfNeeded } from './../actions/selectedSiteActions.js';

class SingleNewsContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		isLogged: PropTypes.bool.isRequired,
		news: PropTypes.array.isRequired,
		match: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired,
		location: PropTypes.object.isRequired
	}

	customViewComponent = () => {
		const { location } = this.props;
		changeSiteIfNeeded(this.props);
	    changeHeightAwesomeBorder();
        changeHeightAwesomeBorder('/news/', location.pathname);
	}

	componentDidMount() {
		this.customViewComponent();
    }

    componentDidUpdate() {
    	this.customViewComponent();
    }
	render() {
		const { newsId } = this.props.match.params;
		const { news, site } = this.props;

		return (
			<ContentWrapperContainer>
				<SingleNews site={site}
					singleNews={news[newsId]} />	
			</ContentWrapperContainer>
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
