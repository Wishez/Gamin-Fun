import React from 'react';

const Figure = ({
	name
}) => (
	<div className={'figure figure--' + name}>
		<figure className={'figure__img figure__img--' + name}>
		</figure>
	</div>
);

export default Figure;