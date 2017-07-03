import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
const NotFound = ({site}) => (	
	<div className='notFound'>
		<h3 className='text-center notFound'>
			На этой странице ничего нет. 
		</h3>
		<Image className='notFound__img'
			src='./../img/cap.jpg' />
		<Link to={`/${site}`}>На главную</Link>
	</div>
);

export default NotFound;