import React, { useEffect } from 'react';
import '../css/App.css';
import Header from './Header';
import Home from './Home';
import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Switch,
} from 'react-router-dom';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from '../firebase';
import { useStateValue } from '../Context/StateProvider';
import Payment from './Payment';
import Orders from './Orders';

const promise = loadStripe('pk_test_9kmI0ikY76mlzE7LwF0wNJxN');

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/orders">
						<Header />
						<Orders />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
