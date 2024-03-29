import moment from 'moment';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import '../css/Order.css';
import CheckoutProduct from './CheckoutProduct';

const Order = ({ order }) => {
	return (
		<div className="order">
			<h2>order</h2>
			<p>
				{moment.unix(order.data.created).format('MMMM do YYYY, h:mma')}
			</p>
			<p className="order__id">
				<small>{order.id}</small>
			</p>
			{order.data.basket?.map((item) => (
				<CheckoutProduct
					id={item.id}
					title={item.title}
					image={item.image}
					price={item.price}
					rating={item.rating}
					hideButton={true}
				/>
			))}
			<CurrencyFormat
				renderText={(value) => <h3>Order total: {value}</h3>}
				decimalScale={2}
				value={order.data.amount / 100}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
		</div>
	);
};

export default Order;
