import React from 'react';
import Title from './Title';
import Paragraph from './Paragraph';
import NewsMeta from './NewsMeta';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

const News = ({
	news
}) => (
	<article className='news'>
		<Title block='news'
			text={news.title}
		/>
		<NewsMeta date={news.created_at} />
		<div className='news__body'> 
			{ReactHtmlParser(`${news.text.slice(0, 255)}...`)}
		</div>
		<Link to={`/news/${news.id}`}
			className='news__nextReading'>
			Читать полностью
		</Link>
	</article>
);

export default News;