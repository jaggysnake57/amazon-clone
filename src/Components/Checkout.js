import React from 'react';
import { useStateValue } from '../Context/StateProvider';
import '../css/Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout__left">
				{/*  */}
				{/*  */}
				<img
					className="checkout__ad"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_2HMCl7fQWU0wj4GjyMFazH8o03H7sSWSpg&usqp=CAU"
					alt=""
				/>
				<div>
					<h2 className="checkout__title">
						Your shopping basket {user?.email}
					</h2>
				</div>
				{basket.map((item) => (
					<CheckoutProduct
						id={item.id}
						title={item.title}
						image={item.image}
						price={item.price}
						rating={item.rating}
					/>
				))}
			</div>
			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
