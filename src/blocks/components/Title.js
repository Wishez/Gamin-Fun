import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Title = ({
	text,
	block
}) => (	
	<h2 className={block + '__title title'}>
		{ ReactHtmlParser(text) }
	</h2>
);

export default Title;