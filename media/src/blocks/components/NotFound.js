import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

const NotFound = ({ site }) => (	
	<div className='notFound'>
		<h1 className='text-center notFound'>
			В разработке&hellip;
		</h1>
		<Image className='notFound__img'
			src='/media/public/img/in_process.jpg' />
		<Link to={`/${site}`}>На главную</Link>
	</div>
);

export default NotFound;