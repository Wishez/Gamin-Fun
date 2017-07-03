import React from 'react';
import {List} from 'semantic-ui-react';
import Title from './Title';

const Constacts = ({
	site
}) => (
	<section className='constact'>
		<div className={`visitCard visitCard--${site}`}>
			<Title block='visitCard' 
				text='GamingFun'
			/>
			<h3 className='visitCard__subtitle'>
			Наши контакты
			</h3>
			<ul className='visitCard__contactsList'>
				<li className='visitCardContact'>
					Мы в вк:&thinsp;
					<a className={`not-follow visitCardContact__refer visitCardContact__refer--${site}`}
					   href='https://vk.com/gamingprivateminecraft'>
						vk.com/gamingprivateminecraft
					</a>
				</li>
				<li className='visitCardContact'>
					Тех-поддержка:&thinsp;
					<a className={`not-follow visitCardContact__refer visitCardContact__refer--${site}`}
					   href='mailto:tech-supprot@domain.ru'>
						tech-&nbsp;supprot@domain.ru
					</a>
				</li>
				<li className='visitCardContact'>
					Сотрудничество:&thinsp;
					<a className={`not-follow visitCardContact__refer visitCardContact__refer--${site}`}
					   href='mailto:will-be-friends@domain.ru'>
						will-&nbsp;be-&nbsp;friends@domain.ru
					</a>
				</li>
			</ul>
		</div>
	</section>
); 

export default Constacts;