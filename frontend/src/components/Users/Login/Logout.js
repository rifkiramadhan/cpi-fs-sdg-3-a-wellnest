const Logout = () => {
	window.localStorage.clear();
  window.location.href= '/login'
	return <></>;
};

export default Logout;
