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
                <div className="hotel-description">
                    <div className="hotel-definition">
                        <div onClick={this.addToCart} className="hotel-title">{hotel.title}</div>
                        <div className="hotel-price">{hotel.price}€ prix/nuit</div>
                    </div>
                    <div>{hotel.description}</div>
                </div>
                
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