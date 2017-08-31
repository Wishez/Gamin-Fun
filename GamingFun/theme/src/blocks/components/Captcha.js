import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Captcha = ({
	input,
	meta: {
		touched,
		error,
		warning
	},
	...rest,
	block

}) => (
	<div className={`${block}`}>
		{touched && 
		 	((error && 
		 		<span className={`${block}__error`}>{error}</span>) || 
		 		(warning && <span className={`${block}__error`}>{warning}</span>))}
		<ReCAPTCHA
	 		{...input}
	 		sitekey='6Lf2rigUAAAAAEb88AaevLR7gTwGhmUb5sQBOoMZ'
	 		{...rest}
	 	/>
 	</div>
);

export default Captcha;