import React from 'react';
import Title from './Title';
import { Icon, Container } from 'semantic-ui-react';
import  LinkImage  from './LinkImage';
import { Link } from 'react-router-dom';
// <LinkImage block='mainPageNavItem'
					// 	site='samp'
					// 	changeSite={changeSite}
					// 	modifier='samp'
					// />
const MainPage = ({
	...rest,
	changeSite,
	site
}) => (
	<div className='mainPage'>
		<header className='mainPageHeader'>
			<Container>
				<LinkImage block='mainPageBrand'
					site=''
					changeSite={() => { 
						changeSite('main');
					}}
					modifier='brand'
				/>
				<nav className='mainPageNav'>
					<LinkImage block='mainPageNavItem'
						site='minecraft'
						changeSite={changeSite}
						modifier='minecraft'
					/>
				</nav>
			</Container>
		</header>
		<main className='mainPageContent'>
			<Container>
				<section className='mainPageContentChief mainPageContentChief--worlds'>
					<Title block='mainPageContentChief'
						text='О дивный новый мир' />
					<div className='mainPageContentChief__body'>
						<p>Вас ждут просторы мира Minecraft с разнообразными модами
						и качественным комьюнити, где ваши действие ограниченны только 
						вашим воображением, ну и требованиями администрации.</p>
					</div>
				</section>
				<section className='mainPageContentChief mainPageContentChief--support'>
					<Title block='mainPageContentChief'
						text='Поддержка'/>
					<div className='mainPageContentChief__body'>
						<p>За небольшую плату в месяц, мы гарантируем
						вам комфортное времяпровождение на сервере 
						доступном 24 часа в сутки.</p>
						<p>Проект имеет свои &thinsp;
						<Link onClick={() => {
							changeSite('minecraft');
						}}
						to='/minecraft/rules' className='mainPage__refer'>
							правила
						</Link>, которые вам следует соблюдать для
						комфортной игры. Вы можете задавать технические вопросы
						нашей справедливой администрации, а также,
						игровые конфликты, с нарушением правил, не 
						останутся без внимания. </p>
					</div>
				</section>
			</Container>
		</main>
		<footer className='mainPageFooter'>
			<Container>
		    	<a href='https://vk.com/gamingprivateminecraft' 
		   			className='not-follow mainPageFooter__icon floatLeft'>
					<Icon 
						name='vk' 
						/>
					</a>
			 		<p className='mainPageFooter__author floatRight'>Дизайн&nbsp;by&nbsp;  
			 				<a href='https://shining-present.ru/'
			 			   		className='mainPage__refer'>
			 			   		Filipp Zhuravlev</a>
			 		</p>
			</Container>
		</footer>
	</div>
); 

export default MainPage;