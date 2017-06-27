import React from 'react';
import ServerStatus from './ServerStatus';
import { Container } from 'semantic-ui-react';
import  LogInForm from './LogInForm';
// Server Status
// User Form
// SubNav
const UserPanel = ({
	...rest
}) => (
	<aside className='userPanel'>
		<Container>
			<ServerStatus {...rest} />
			<LogInForm {...rest} />
		</Container>
	</aside>
);

export default UserPanel;
