import React from 'react';
import ServerStatus from './ServerStatus';
import { Container } from 'semantic-ui-react';
import  LogInForm from './LogInForm';
import UserCard from './UserCard';

const UserPanel = ({
	...rest,
	isLogged
}) => (
	<aside className='userPanel'>
		<Container>
			<ServerStatus {...rest} />
			{isLogged ? 
				<UserCard {...rest} />
				:
				<LogInForm {...rest} />}
		</Container>
	</aside>
);

export default UserPanel;
