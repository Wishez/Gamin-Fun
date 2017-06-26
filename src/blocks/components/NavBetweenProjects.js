import React from 'react';
import ProjectSwitcher from './ProjectSwitcher';
import { Container } from 'semantic-ui-react';

const NavBetweenProjects = ({
	...rest,
	getClasses
}) => (
	<nav className='projectsNav'>
		<ProjectSwitcher {...rest} 
			content='Samp'
			href='#' />
		<ProjectSwitcher {...rest} 
			content='Minecraft'
			href='#' />	
	</nav>
);

export default NavBetweenProjects;