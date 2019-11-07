import React from 'react';
import Arrow from './arrow/arrow.component';
import Card from './card/card.component';
import './carousal.component.css';

const products = [
	{
		category: 'category1',
		title: 'Title 1',
		price: '$200',
		image: "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781"
	},
	{
		category: 'category2',
		title: 'Title 2',
		price: '$400',
		image: "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
	},
	{
		category: 'category1',
		title: 'Title 3',
		price: '$600',
		image: "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg"
	},
	{
		category: 'category3',
		title: 'Title 4',
		price: '$800',
		image: "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328"
	},
	{
		category: 'category2',
		title: 'Title 5',
		price: '$1000',
		image: "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900"
	}
];

class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0,
			selectedCategories: props.selectedCategories,
			products: [...products]
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	static getDerivedStateFromProps(nextProps, prevState){		
		if(nextProps.selectedCategories !== prevState.selectedCategories){
			const selectedCategories = nextProps.selectedCategories;
			let prods;
			if(!selectedCategories.length) {
				prods = [...products];
			} else {
				prods = products.filter(product => selectedCategories.includes(product.category))
			}

		return {
				selectedCategories: nextProps.selectedCategories,
				currentImageIndex: 0,
				products: prods
			}
		 }
		 else return null;   		
	 }	 

	previousSlide () {
		const lastIndex = this.state.products.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = this.state.products.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}
	
	render () {	

		return (
			<div className="carousel">
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
				<Card product={ products[this.state.currentImageIndex] } />
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
			</div>
		);
	}
}

export default Carousel;