import React from 'react';

const NewsMeta = ({
	date
}) => (
	<div className='news__meta'>
	    <small className='article__date'>
	    	{ date }
	    </small>
    </div>
);

export default  NewsMeta;