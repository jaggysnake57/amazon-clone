import { Star } from '@material-ui/icons';
import React from 'react';
import { useStateValue } from '../Context/StateProvider';
import '../css/Product.css';

const Product = ({ title, image, price, rating, id }) => {
	const [{ basket }, dispatch] = useStateValue();
	const addToBasket = () => {
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id,
				title,
				image,
				price,
				rating,
			},
		});
	};
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>
								<Star />
							</p>
						))}
				</div>
			</div>
			<img src={image} />
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
};

export default Product;
