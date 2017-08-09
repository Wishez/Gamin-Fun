import * as Cookies from 'js-cookie';

export const cookiesHandler = {
	setUsernameAndPasswordToCookies: ({
		site,
		username,
		password
	}) => {
		Cookies.set(`${site}Password`, password);
		Cookies.set(`${site}Username`, username);
	},
	getUsernameAndPasswordFromCookies: site => (
		{
			username: Cookies.get(`${site}Username`),
			password: Cookies.get(`${site}Password`)
		}
	),
	clearCookies: site => {
		Cookies.remove(`${site}Username`);
		Cookies.remove(`${site}Password`);
	}

};

export const convertDate = date => {
	return new Date(date).toLocaleDateString('ru-RU', {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	});	
};
export const changeHeightAwesomeBorder = () => {
    $('#awesomeBorder').css('height', $('#root').innerHeight());
};

