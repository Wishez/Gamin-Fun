import React, {Component} from 'react';
import {Container } from 'semantic-ui-react';
import UserPanelContainer from './UserPanelContainer';
import PropTypes from 'prop-types';
import Title from './../components/Title';
import SingleNews from './../components/SingleNews';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class SingleNewsContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		isLogged: PropTypes.bool.isRequired,
		news: PropTypes.array.isRequired,
		match: PropTypes.object.isRequired
	}
	componentDidMount() {
	    changeHeightAwesomeBorder();
    }

    componentDidUpdate() {
       
       changeHeightAwesomeBorder();
    }
	render() {
		const { newsId } = this.props.match.params;
		const { news, site } = this.props;
		console.log(newsId, 'newsId is matched');
		console.log(news, 'news from SingleNewsC')
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
