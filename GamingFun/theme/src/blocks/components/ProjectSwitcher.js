import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSwitcher = ({
	site,
	currentSite,
	content,
	getClasses,
	changeSite
}) => (
	<Link to={`/${site}`} 
	   className={getClasses(content, currentSite)}
	   onClick={() => {
	   	 changeSite(site);
	   }}>
		{content}
	</Link>
);

export default ProjectSwitcher;