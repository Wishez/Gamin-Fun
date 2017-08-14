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
import { selectNavigationItem } from './../actions/navigationActions.js';

class NewsContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		isLogged: PropTypes.bool.isRequired,
		news: PropTypes.array.isRequired,
		dispatch: PropTypes.func.isRequired,
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired
	}
	customViewComponent = () => {
		const { location, site } = this.props;
        changeHeightAwesomeBorder(`/${site}`, location.pathname);
	}
	componentDidMount() {
		const { dispatch, site } = this.props;

		changeSiteIfNeeded(this.props);
		
		dispatch(selectNavigationItem('firstNavItem'));
		dispatch(fetchNewsIfNeeded(site));
		this.customViewComponent();
    }

    componentDidUpdate() {
		this.customViewComponent();
    }

    componentWillReceiveProps(nextProps) {
 		
 		const nextSite = nextProps.site;
 		// При переключение с сайта на сайт, обновляет новости
 		if (this.props.site !== nextSite) {
			const { dispatch } = this.props;

			dispatch(fetchNewsIfNeeded(nextSite));
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