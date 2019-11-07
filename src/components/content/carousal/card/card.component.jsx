import React from 'react';
import './card.component.css'

const Card = ({ product }) => {
	const styles = {
		backgroundImage: `url(${product.image})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};
	
	return (
		<div className="card">
			<div className="image-slide" style={styles}>
				<h1>{product.title}</h1>
				<h3>{product.price}</h3>
			</div>
		</div>		
	);
}

export default Card;