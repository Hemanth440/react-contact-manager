import React from 'react';
import Carousel from '../carousal/carousal.component';
import InputTag from '../input-tag/input-tag.component';

class ProductsCarousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			selectedCategories: []
		};
	}
    
    setCategories(selectedCategories) {
        this.setState({
            selectedCategories            
        });
    }

	render () {
		return (
			<>
			<InputTag setCategories={this.setCategories} />
			<Carousel selectedCategories={this.state.selectedCategories}/>
			</>
		);
	}
}

export default ProductsCarousel;