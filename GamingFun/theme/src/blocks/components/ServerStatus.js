import React from 'react';
import { Progress } from 'semantic-ui-react';
import Title from './Title';
 
const ServerStatus = ({
	amountPeople,
	totalPeople,
	showStatus,
	site,
	serverName,
	isOnline
}) => (
	<div className={`server server--${site}`}>
		<Title block='server'
			text={serverName} />
		<a className='server__link not-follow' href='http://minecraftrating.ru/vote/29872/'>Голосовать</a>
		<a className='server__link' href='#'>О сервере</a>
		<Progress percent={
				showStatus(amountPeople, totalPeople)
		}	
			size='medium'
			className={`server__status server__status--${site}`}
			active
		>
			<span className='server__status--text'>
				{isOnline ? 
					amountPeople + '/' + totalPeople :
					'Offline'
				}</span>
		</Progress>
	</div>
);

export default ServerStatus;