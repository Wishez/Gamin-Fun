import React from 'react';

const ProjectSwitcher = ({
	site,
	content,
	getClasses,
	href,
	changeSite
}) => (
	<a href={href}
	   className={getClasses(content, site)}
	   onClick={changeSite}>
		{content}
	</a>
);

export default ProjectSwitcher;