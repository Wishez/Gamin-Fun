import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import UserPanelContainer from './UserPanelContainer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Title from './../components/Title';
import NewsList from './../components/NewsList';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { withRouter } from 'react-router-dom';
import { fetchNewsIfNeeded } from './../actions/newsActions.js';
import { changeSiteIfNeeded } from './../actions/selectedSiteActions.js';


class NewsContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		isLogged: PropTypes.bool.isRequired,
		news: PropTypes.array.isRequired,
		dispatch: PropTypes.func.isRequired,
		match: PropTypes.object.isRequired
	}

	componentDidMount() {
		const { dispatch, site } = this.props;
		changeSiteIfNeeded(this.props);
	    changeHeightAwesomeBorder();

		dispatch(fetchNewsIfNeeded(site));
    }

    componentDidUpdate() {
    	changeHeightAwesomeBorder();
    }

    componentWillReceiveProps(nextProps) {
    	if (nextProps.site !== this.props.site) {
    		const { dispatch, site } = this.props;
    		dispatch(fetchNewsIfNeeded(site));
    	}
    }
	render() {
		const { news, site } = this.props;
	
		return (
			<div className='contentWrapper'>
				<UserPanelContainer {...this.props} />
				<Container>
					<Title block='contentWrapper' 
						text='Новости'
					/>
					<NewsList newsList={news}
						site={site} />	
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
		isLogged,
		news: news,
		site: selectedSite
	};
}

export default withRouter(connect(mapStateToProps)(NewsContainer));