import React from 'react';
import Dropzone from 'react-dropzone';


const UserAvatarForm = ({
	submitChangeAvatar
}) => (
	<div className='changeAvatarZone'>
		<Dropzone onDrop={submitChangeAvatar}>
			<p>Изменить аватар</p>
		</Dropzone>
	</div>
);

export default UserAvatarForm;