import React from 'react';
import ProjectSwitcher from './ProjectSwitcher';
import { Container } from 'semantic-ui-react';

const NavBetweenProjects = ({
	...rest,
	getClasses,
	site
}) => (
	<nav className={`projectsNav projectsNav--${site}`}>
		<ProjectSwitcher {...rest} 
		    site='samp'
			content='Samp'
			currentSite={site} 
		 />
		<ProjectSwitcher {...rest} 
			site='minecraft'
			content='Minecraft'
			currentSite={site} 
		/>	
	</nav>
);

export default NavBetweenProjects;