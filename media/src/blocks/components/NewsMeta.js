import React from 'react';
import { convertDate } from './../constants/pureFunctions.js';
const NewsMeta = ({
	date
}) => (
	<div className='news__meta'>
	    <small className='article__date'>
	    	{ convertDate(date) }
	    </small>
    </div>
);

export default  NewsMeta;