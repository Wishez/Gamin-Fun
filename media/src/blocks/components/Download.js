import React from 'react';
import {List} from 'semantic-ui-react';
import Title from './Title';

const Download = ({...rest}) => (
	<section className='download'>
		<div className='downloadFiles'>

			<Title block='downloadFiles' 
				text='Загрузка'
			/>
			<a href='#'
			   download
			   className='downloadFiles__file'>
				Скачать лаунчер
			</a>
			<a href='#'
			   className='downloadFiles__file'
			   download>
				Скачать клиент
			</a>
		</div>
		<div className='installationFiles'>
			<Title block='installationFiles' 
				text='Установка'
			/>
			<List className='installationSteps'
				as='ol'>
				<List.Item as='li'
					className='installationSteps__step'>
					Запустить лаунчер
				</List.Item>
				<List.Item as='li'
					className='installationSteps__step'>
					Выбрать нужные моды
				</List.Item>
				<List.Item as='li'
					className='installationSteps__step'>
					Нажать кнопку обновить
				</List.Item>
				<List.Item as='li'
					className='installationSteps__step'>
					Залогиниться в аккаунт
				</List.Item>
				<List.Item as='li'
					className='installationSteps__step'>
					Играть
				</List.Item>
			</List>
		</div>
	</section>
); 

export default Download;