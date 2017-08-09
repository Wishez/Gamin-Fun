import React from 'react';
import { Icon } from 'semantic-ui-react';

const FooterContacts = ({
	site
}) => (
	<div className={'text-center footerContacts footerContacts--' + site}>
		<a href='https://vk.com/gamingprivateminecraft' 
		   className={'footerContacts__icon footerContacts__icon--' + site}>
			<Icon 
				name='vk' 
				className='not-follow'
			/>
		</a>
		<br/>
 		<p className='author'>Developed&nbsp;by&nbsp;  
 			<a href='https://web-renome.ru'
 			   className={'not-follow author__refer author__refer--' + site }>Renome</a>
 		</p>
	</div>
);

export default FooterContacts;