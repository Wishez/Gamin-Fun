import React from 'react';
import News from './News.js'
import Figure from './Figure';

const FiguresList = ({
	figuresNames
}) => (
	<div>
		{figuresNames.map((name, index) => (
			<Figure name={name}
				key={index} />
		))}
	</div>
);

export default FiguresList;