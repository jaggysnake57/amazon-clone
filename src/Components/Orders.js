import { logDOM } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { useStateValue } from '../Context/StateProvider';
import '../css/Orders.css';
import { db } from '../firebase';
import Order from './Order';

const Orders = () => {
	const [{ basket, user }, dispatch] = useStateValue();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (user) {
			db.collection('users')
				.doc(user?.uid)
				.collection('orders')
				.orderBy('created', 'desc')
				.onSnapshot((snapshot) =>
					setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					)
				);
		}
	}, [user]);

	return (
		<div className="orders">
			<div className="orders__container">
				{orders?.map((order) => (
					<Order order={order} />
				))}
			</div>
		</div>
	);
};

export default Orders;
