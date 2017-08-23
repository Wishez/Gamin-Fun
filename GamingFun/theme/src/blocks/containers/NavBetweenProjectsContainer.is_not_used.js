import React, { Component } from  'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { changeSite } from './../actions/selectedSiteActions.js'
import NavBetweenProjects from './../components/NavBetweenProjects';

class NavBetweenProjectsContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		dispatch: PropTypes.func.isRequired
	}

	getClasses = (content, site) => {
		const siteButtonClass = 'projectsNav__button--' + site;
		return classNames({

			'text-center projectsNav__button': true,
			[siteButtonClass]: true,
			[siteButtonClass + '_active']: content.toLowerCase() === site
		})
	}

	changeSite = site => {
		const { dispatch } = this.props;

		dispatch(changeSite(site));
	}

	render() {
		return (
			<div className={`projects projects--${this.props.site}`}>
				<NavBetweenProjects {...this.props}
					changeSite={this.changeSite}
					getClasses={this.getClasses}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { selectedSite } = state;


	return {
		site: selectedSite
	}
}

export default withRouter(connect(mapStateToProps)(NavBetweenProjectsContainer))