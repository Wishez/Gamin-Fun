import * as Cookies from 'js-cookie';

const crossDomainRequest = (xhr, settings, that) => {		
	const csrftoken = Cookies.get('csrftoken');
	const csrfSafeMethod = (method) => (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
	if (!csrfSafeMethod(settings.type) && !that.crossDomain) {
 		xhr.setRequestHeader("X-CSRFToken", csrftoken);
	}
};

const customAjaxRequest = (url, data, type) => {
	$.ajaxSetup({
		url: url,
		type: type,
		data: data,
		beforeSend(xhr, settings) {
			crossDomainRequest(xhr, settings, this);
		}
	});
};


const customRequestToServer = (url, data, method) => {
	const csrfSafeMethod = method => (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
	const headers = !csrfSafeMethod(method) ?  
	 	{
			'X-CSRFToken': Cookies.get('csrftoken')
		} : 
		{};

	return {
		uri: `http://localhost:8080${url}`,
		method: method,
		body: data,
		headers: {
			...headers
		},
		json: true
	};
};

export default customAjaxRequest;