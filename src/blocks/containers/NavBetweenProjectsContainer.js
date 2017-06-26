import NavBetweenProjects from './../components/NavBetweenProjects';
import React, { Component } from  'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class NavBetweenProjectsContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired
	}

	getClasses = (content, site) => {
		const siteButtonClass = 'projectsNav__button--' + site;
		return classNames({

			'text-center projectsNav__button': true,
			[siteButtonClass]: true,
			[siteButtonClass + '_active']: content.toLowerCase() === site
		})
	}
	render() {
		return (
			<div className='projects'>
				<NavBetweenProjects {...this.props}
					getClasses={this.getClasses}
				/>
			</div>
		);
	}
}
