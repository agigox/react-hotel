import React, { Component } from 'react';
import { connect } from 'react-redux';

class HotelItem extends Component {

    constructor(props) {
        super(props);
    }

    addToCart = () => {
        this.props.addToCart(this.props.hotel);
    }
    render() {
        const {hotel} = this.props;
        return (
            <div className='hotel-item'>
                <img src={hotel.image} />
                <h1 onClick={this.addToCart}>{hotel.title}</h1>
                <p>{hotel.description}</p>
                <div>{hotel.price} prix/nuit</div>
                
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    addToCart: (data) => {
        dispatch({ type: 'ADD_TO_CART', playload: data })
        console.log(data);
    }
});
export default connect(null, mapDispatchToProps)(HotelItem)