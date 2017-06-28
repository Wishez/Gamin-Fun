import React from 'react';

const NewsMeta = ({
	date
}) => (
	<div className='news__meta'>
		<strong>
			Опубликовано:
		</strong>
		&nbsp;
	    <small className='article__date'>
	    	{ date }
	    </small>
	    &thinsp;&thinsp;&thinsp;
    </div>
);

export default  NewsMeta;