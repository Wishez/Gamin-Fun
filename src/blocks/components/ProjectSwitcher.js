import React from 'react';

const ProjectSwitcher = ({
	site,
	content,
	getClasses,
	href
}) => (
	<a href={href}
	   className={getClasses(content, site)}>
		{content}
	</a>
);

export default ProjectSwitcher;