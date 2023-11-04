import React from 'react';

const HomePage = () => {
	if (!window.localStorage.token) {
		window.location.href = '/login';
	}
	console.log(window.localStorage);
	return <div>Home Page</div>;
};

export default HomePage;
