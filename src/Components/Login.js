import { auth } from '../firebase';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../css/Login.css';

const Login = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signIn = (e) => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push('/');
			})
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				console.log(auth);
			})
			.catch((error) => alert(error.message));
		if (auth) {
			history.push('/');
		}
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://www.kumulos.com/wp-content/uploads/2013/08/amazon-logo-preview.png"
					alt=""
				/>
			</Link>
			<div className="login__container">
				<h1>Sign In</h1>
				<form action="">
					<h5>Email</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						type="submit"
						onClick={signIn}
						className="login__signInButton">
						Sign In
					</button>
				</form>
				<button onClick={register} className="login__registerButton">
					Create your Amazon account
				</button>
			</div>
		</div>
	);
};

export default Login;
