import BASE_URL from './baseURL';

export const fetchApi = async (url, headers) => {
	const response = await fetch(BASE_URL + '/api' + url, headers);
	console.log(response);
	const data = await response.json();

	return {
		response: {
			OK: response.ok,
			status: response.status,
			statusText: response.statusText,
		},
		data: data,
	};
};
