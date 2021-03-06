import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { convertDate } from './../constants/pureFunctions.js';
import Dropzone from 'react-dropzone';

const UserCard = ({
	userData,
	site,
	logOut,
	username,
	submitChangeAvatar
}) => (
	<Card className={`userCard userCard--${site}`}>
		<Image src={userData.avatar}
			className='userCard__avatar'/>
		<div className='changeAvatarZone'>
			<Dropzone className='changeAvatarZone__zone'
					onDrop={submitChangeAvatar}>
					<p>Изменить аватар</p>
			</Dropzone>
		</div>
		<Card.Content className={`userCardInfo userCardInfo--${site}`}>
			<Card.Header className={`userCardInfo__name userCardInfo__name--${site}`}>
				{username}
			</Card.Header>
			<Card.Meta className={`userCardInfo__status userCardInfo__status--${site}`}>
				<strong>Статус подписки</strong>
				<br/>
				{userData.status}
				<br/>
				{userData.activeUntil ? 
					convertDate(userData.activeUntil) : ''}
			</Card.Meta>
			<Card.Meta>
				
			</Card.Meta>
			<Card.Description className={`userCardInfo__balance  userCardInfo__balance--${site}`}>
				{`Баланс: ${userData.balance} кредитов`}
			</Card.Description>
		</Card.Content>
		<Card.Content className={`userCardButtons userCardButtons--${site}`} >
			<Link to={`/${site}/personal_room`} 
				className={`userCardButtons__button userCardButtons__button--${site} userCardButtons__button--personalRoom`}>
				Личный кабинет
			</Link>
			<Link to={`/${site}`}
				className={`userCardButtons__button userCardButtons__button--${site} userCardButtons__button--logout`}
				onClick={logOut}>
				Выход
			</Link>
		</Card.Content>

	</Card>	
);

export default UserCard;