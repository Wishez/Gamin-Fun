import React from 'react';
import Title from './Title';
import { Icon, Container } from 'semantic-ui-react';
import  LinkImage  from './LinkImage';
import { Link } from 'react-router-dom';

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
						site='samp'
						changeSite={changeSite}
						modifier='samp'
					/>
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
						text='Миры' />
					<div className='mainPageContentChief__body'>
						<p>Вы можете выбрать один из двух миров, где вас
						ждут &mdash; непостяжимые просторы Minecraft или 
						захватывающий своей бурной жизнью мир San Andreas.</p>
					</div>
				</section>
				<section className='mainPageContentChief mainPageContentChief--support'>
					<Title block='mainPageContentChief'
						text='Поддержка'/>
					<div className='mainPageContentChief__body'>
						<p>За небольшую плату в месяц, мы гарантируем
						вам комфортное времяпровождение на серверах 
						доступных 24 часа в сутки.</p>
						<p>У каждого мира есть свои правила &mdash; (
						<Link onClick={() => {
								changeSite('samp');
							}}
							to='/samp/rules' className='mainPage__refer'>
							samp
						</Link>/
						<Link onClick={() => {
							changeSite('minecraft');
						}}
						to='/minecraft/rules' className='mainPage__refer'>
							minecraft
						</Link>
						). Вы можете задавать технические вопросы
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
			 				<a href='https://web-renome.ru'
			 			   		className='mainPage__refer'>
			 			   		Renome</a>
			 		</p>
			</Container>
		</footer>
	</div>
); 

export default MainPage;