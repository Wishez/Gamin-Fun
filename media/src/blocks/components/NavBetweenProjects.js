import React from 'react';
import ProjectSwitcher from './ProjectSwitcher';
import { Container } from 'semantic-ui-react';

const NavBetweenProjects = ({
	...rest,
	getClasses,
	changeSite,
	site
}) => (
	<nav className={`projectsNav projectsNav--${site}`}>
		<ProjectSwitcher {...rest} 
			content='Samp'
			changeSite={() => {
				changeSite('samp')
			}} />
		<ProjectSwitcher {...rest} 
			changeSite={() => {
				changeSite('minecraft')
			}}
			content='Minecraft' />	
	</nav>
);

export default NavBetweenProjects;