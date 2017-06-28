import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Paragraph = ({ 
	text,
	 block 
}) => (
		
	<p className={block + '__paragraph'}>
		{ ReactHtmlParser(text) }
	</p>
);

export default Paragraph;