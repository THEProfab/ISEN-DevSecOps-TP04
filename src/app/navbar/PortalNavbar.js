import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

import GlobalContext from '../home/GlobalContext';

function PortalNavbar(param) {
	const { globalValue } = useContext(GlobalContext);

	useEffect(() => {}, [globalValue]);

	//const globalValue = 'Production';

	//const navigate = useNavigate();

	// const logout = () => {
	// 	localStorage.clear();
	// 	navigate('/auth/login');
	// };

	return (
		<nav class="navbar navbar-expand-lg monbackground">
			<div class="container-fluid"></div>
		</nav>
	);
}
export default PortalNavbar;
