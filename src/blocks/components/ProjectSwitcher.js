import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSwitcher = ({
	site,
	content,
	getClasses,
	changeSite
}) => (
	<Link to={`/${site}`}
	   className={getClasses(content, site)}
	   onClick={changeSite}>
		{content}
	</Link>
);

export default ProjectSwitcher;