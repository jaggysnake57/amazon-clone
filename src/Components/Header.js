import { Search, ShoppingBasket } from '@material-ui/icons';
import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';

import '../css/header.css';

const Header = () => {
	const [{ basket, user }, dispatch] = useStateValue();
	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__logo"
					src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png"
					alt="amazon"
				/>
			</Link>
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<Search className="header__searchIcon" />
			</div>
			<div className="header__nav">
				{/* nave stuff */}
				<Link to={!user && '/login'}>
					<div
						onClick={handleAuthentication}
						className="header__option">
						<span className="header__optionLineOne">Hello</span>
						<span className="header__optionLineTwo">
							{user ? 'Sign out' : 'Sign In'}
						</span>
					</div>
				</Link>
				<Link to="/orders">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>
				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
				<Link to="/checkout">
					<div className="header__optionBasket">
						<ShoppingBasket />
						<span className="header__optionLineTwo header__basketCount">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
