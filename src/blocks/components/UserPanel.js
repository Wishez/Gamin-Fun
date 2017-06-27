import React from 'react';
import ServerStatus from './ServerStatus';
// Server Status
// User Form
// SubNav
const UserPanel = ({
	...rest
}) => (
	<aside className='userPanel'>
		<ServerStatus {...rest}/>
	</aside>
);

export default UserPanel;
