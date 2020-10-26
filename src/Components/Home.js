import React from 'react';
import '../css/Home.css';
import Product from './Product';
function Home() {
	return (
		<div className="home">
			{/*  */}
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTE4NDY4NmUt/NTE4NDY4NmUt-ZTYzZmYwZTYt-w1500._CB404747132_.jpg"
					alt=""
				/>
				<div className="home__row">
					<Product
						id="32132654654"
						title="the lean start up - Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste accusamus illum inventore quaerat harum temporibus vitae numquam delectus nemo!"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
						rating={5}
					/>
					<Product
						id="2564515556446"
						title="KENWOOD KMIX Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque suscipit fuga quaerat assumenda possimus accusamus ipsum quasi! Neque, fuga officia!"
						price={299.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._AC_SL1200_.jpg"
						rating={4}
					/>
				</div>
				<div className="home__row">
					{/* row */}
					{/*  */}
					<Product
						id="6546351321654324646546465"
						title="FITBIT Inspire HR Fitness Tracker - Black, Universal"
						price={129.99}
						image="https://brain-images-ssl.cdn.dixons.com/5/5/10190455/u_10190455.jpg"
						rating={3}
					/>
					<Product
						id="166854674676132132"
						title="Amozon Echo (3rd generation) - Lorem ipsum dolor sit amet consectetur adipisicing elit."
						price={29.99}
						image="https://images.crutchfieldonline.com/ImageHandler/trim/620/378/products/2019/43/837/g837ECHO3G-F.jpg"
						rating={5}
					/>
					<Product
						title="Apple iPad pro (12.9-inch, Wi-Fi, 128gb) - Lorem ipsum dolor sit amet consectetur dipisicing elit"
						price={799.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="98756465457774"
						title="samsung LC4900000CUM ultra wide monitor"
						price="999.99"
						image="https://images-na.ssl-images-amazon.com/images/I/71RC3o90shL._AC_SL1500_.jpg"
						rating={3}
					/>
				</div>
			</div>
			{/*  */}
		</div>
	);
}

export default Home;
