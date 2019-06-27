import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = ({cart}) => {
    if(cart.length == 0) {
        return <div className="cart">
            Votre Panier est vide
        </div>
    }
    const total = 0;
    return (
        <div className="cart">
            <h2>Panier</h2>
            {cart.map((hotel, i) => {
                return (
                    <div key={i} className="hotel-cart-item">
                        <div>
                            <img src={hotel.image} />
                        </div>
                        <div>
                            <div className="hotel-cart-item-title">{hotel.title}</div>
                            <div className="hotel-cart-item-price">{hotel.price}€</div>
                        </div>
                        
                    </div>
                );
            })}
            <div className="cart-total">
            <div className="total-cart-box">
            <div>Total</div>
            <div>
                {cart.reduce((total, hotel) => {
                    total += hotel.price;
                    return total;
                }, 0)}
                €</div>
            </div>
            </div>
            <div className='valider-panier'>
                <Link to="/user-details/">Valider</Link>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);