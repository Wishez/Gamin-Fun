import React from 'react';
import News from './News.js'

const NewsList = ({
	newsList
}) => (
	<ul className='newsList'>
		{newsList.map(news => (
			<li className='newsList__item' key={news.id}>
				<News news={news} />
			</li>
		))}
	</ul>
);

export default NewsList;