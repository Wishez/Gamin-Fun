import React from 'react';
import Title from './Title';
import Paragraph from './Paragraph';
import NewsMeta from './NewsMeta';
import ReactHtmlParser from 'react-html-parser';

const News = ({
	news
}) => (
	<article className='news'>
		<Title block='news'
			text={news.title}
		/>
		<NewsMeta date={news.created_at} />
		<div className='news__body'> 
			{ReactHtmlParser(news.text)}
		</div>
		<a href='#' 
			className='news__nextReading'>
			Читать полностью
		</a>
	</article>
);

export default News;