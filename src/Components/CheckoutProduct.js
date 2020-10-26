import { Star } from '@material-ui/icons';
import React from 'react';
import { useStateValue } from '../Context/StateProvider';
import '../css/CheckoutProduct.css';

const CheckoutProduct = ({ title, image, price, rating, id, hideButton }) => {
	const [{ basket }, dispatch] = useStateValue();
	const removeFromBasket = () => {
		dispatch({
			type: 'REMOVE_ITEM_FROM_BASKET',
			id,
		});
	};
	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} alt="" />
			<div className="checkoutProduct__info">
				<p>{title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>
								<Star />
							</p>
						))}
				</div>
				{!hideButton && (
					<button onClick={removeFromBasket}>
						Remove from Basket
					</button>
				)}
			</div>
		</div>
	);
};

export default CheckoutProduct;
