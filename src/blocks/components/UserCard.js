import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const UserCard = ({
	user,
	site,
	logOut
}) => (
	<Card className={`userCard userCard--${site}`}>
		<Image src={user.avatar} 
			className='userCard__avatar'/>
		<Card.Content className={`userCardInfo userCardInfo--${site}`}>
			<Card.Header className={`userCardInfo__name userCardInfo__name--${site}`}>
				{user.name}
			</Card.Header>
			<Card.Meta className={`userCardInfo__status userCardInfo__status--${site}`}>
				<strong>Статус подписки</strong>
				<br/>
				{user.status}
			</Card.Meta>
			<Card.Meta>
				
			</Card.Meta>
			<Card.Description className={`userCardInfo__balance  userCardInfo__balance--${site}`}>
				{`Баланс: ${user.balance} кредитов`}
			</Card.Description>
		</Card.Content>
		<Card.Content className={`userCardButtons userCardButtons--${site}`} >
			<Link to='/personal_room'
				className={`userCardButtons__button userCardButtons__button--${site} userCardButtons__button--personalRoom`}>
				Личный кабинет
			</Link>
			<Link to='/'
				className={`userCardButtons__button userCardButtons__button--${site} userCardButtons__button--logout`}
				onClick={logOut}>
				Выход
			</Link>
		</Card.Content>

	</Card>	
);

export default UserCard;