import React from 'react';
import UserPanelContainer from './UserPanelContainer';
import { Container } from 'semantic-ui-react';

const ContentWrapperContainer = ({
	children
}) => (
	<div className='contentWrapper'>
		<UserPanelContainer />
		<Container>
			{children}
		</Container>
	</div>
);

export default ContentWrapperContainer;