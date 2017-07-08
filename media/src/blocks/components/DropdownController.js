import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropdownController = ({
	input,
	meta: {
		touched,
		error,
		warning
	},
	block,
	onQuantityMonthesChange,
	...rest
}) => (
	<div className={block}>
		<Dropdown className={`${block}__dropdown`}
			selection {...input}
			value={input.value}
			onChange={(param, data) => { 
				input.onChange(data.value) ;
				onQuantityMonthesChange(data.value);
			}}
			{...rest}
		/>
	</div>
);

export default DropdownController;