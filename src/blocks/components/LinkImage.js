import React from 'react';
import { Link } from 'react-router-dom';

const LinkImage = ({
	changeSite,
	site,
	block,
	modifier
}) => (
	<div className={`${block} ${block}--${modifier}`}>
		<Link to={`/${site}`}
			onClick={() => {
				changeSite(site)
			}}>
			<figure className={`${block}__img ${block}__img--${modifier}`} />
		</Link>
	</div>
); 

export default LinkImage;