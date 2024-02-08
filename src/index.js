import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './auth/login/Login';
import Auth from './auth/Auth';
import ProtectedRoute from './util/ProtectedRoute';

import App from './app';
import Accueil from './app/home/Accueil';

const root = createRoot(document.querySelector('.appContainer'));
root.render(
	<BrowserRouter basename={'/'}>
		<Routes>
			{/* <Route path="/auth" element={<Auth />}>
				<Route path="login" element={<Login />} />
			</Route> */}
			<Route path="/" element={<App />}>
				<Route
					path=""
					element={
						<ProtectedRoute>
							{' '}
							<Accueil />{' '}
						</ProtectedRoute>
					}
				/>
			</Route>
		</Routes>
	</BrowserRouter>
);
