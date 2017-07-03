import * as Cookies from 'js-cookie';

const crossDomainRequest = (xhr, settings, that) => {		
	const csrftoken = Cookies.get('csrftoken');
	const csrfSafeMethod = (method) => (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
	if (!csrfSafeMethod(settings.type) && !that.crossDomain) {
 		xhr.setRequestHeader("X-CSRFToken", csrftoken);
	}
};

export default crossDomainRequest;