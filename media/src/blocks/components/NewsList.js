import React from 'react';
import News from './News.js'

const NewsList = ({
	newsList,
	...rest
}) => (
	<ul className='newsList'>
		{Object.assign([], newsList).map(news => (
			<li className='newsList__item' key={news.id}>
				<News news={news} 
					{...rest}/>
			</li>
		))}
	</ul>
);

export default NewsList;