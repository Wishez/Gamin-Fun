import React from 'react';
import { Progress } from 'semantic-ui-react';
import Title from './Title';
 
const ServerStatus = ({
	amountPeople,
	totalPeople,
	showStatus,
	site
}) => (
	<div className={'server server--' + site}>
		<Title block='server'
			text='Статус сервера'/>
		<Progress percent={
				showStatus(amountPeople, totalPeople)
		}	
			size='medium'
			className={'server__status server__status--' + site}
			active
		>
			<span className='server__status--text'>{amountPeople + '/' + totalPeople}</span>
		</Progress>
	</div>
);

export default ServerStatus;