import React from 'react';
import Title from './Title';
import Paragraph from './Paragraph';
import NewsMeta from './NewsMeta';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

const SingleNews = ({
	singleNews
}) => (
	<article className='news'>
		<Title block='news'
			text={singleNews.title}
		/>
		<NewsMeta date={singleNews.created_at} />
		<div className='news__body'> 
			{ReactHtmlParser(singleNews.text)}
		</div>
		<Link to='/' 
			className='news__toMainPage'>
			На главную
		</Link>
	</article>
);

export default SingleNews;