import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import axios from '../axios';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import { getBasketTotal } from '../Context/reducer';
import { useStateValue } from '../Context/StateProvider';
import '../css/Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { db } from '../firebase';

const Payment = () => {
	const [{ basket, user }, dispatch] = useStateValue();

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState('');
	const [clientSecret, setClientSecret] = useState(true);

	const history = useHistory();
	const stripe = useStripe();
	const elements = useElements();

	useEffect(() => {
		// generate stripe secret
		const getClientSecret = async () => {
			const response = await axios({
				method: 'post',
				url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
			});
			console.log('response', response.data);
			setClientSecret(response.data.clientSecret);
		};
		getClientSecret().catch((error) => {
			console.warn(
				'There has been an error, the message reads',
				error.message
			);
		});
		console.log({ clientSecret });
	}, [basket]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				db.collection('users')
					.doc(user?.uid)
					.collection('orders')
					.doc(paymentIntent.id)
					.set({
						basket: basket,
						amount: paymentIntent.amount,
						created: paymentIntent.created,
					});
				setSucceeded(true);
				setError(null);
				setProcessing(false);

				dispatch({
					type: 'EMPTY_BASKET',
				});

				history.replace('/orders');
			})
			.catch((error) => {
				console.warn(error.message);
			});
	};
	const handleChange = (e) => {
		//listen for changes to the card element
		//display errors as user type
		setDisabled(e.empty);
		setError(e.error ? e.error.message : '');
	};

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					checkout (
					<Link to="/checkout">{basket?.length} items </Link>)
				</h1>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>123 react lane</p>
						<p>Birmingham</p>
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>review items and delivery</h3>
					</div>
					<div className="payment__items">
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
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>payment method</h3>
					</div>

					<div className="payment__details">
						{/* stripe */}
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => (
										<h3>Order total: {value}</h3>
									)}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={'text'}
									thousandSeparator={true}
									prefix={'$'}
								/>
								<button
									disabled={
										processing || disabled || succeeded
									}>
									<span>
										{processing ? (
											<p>Processing</p>
										) : (
											'Buy Now'
										)}
									</span>
								</button>
								{error && <div>{error}</div>}
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
