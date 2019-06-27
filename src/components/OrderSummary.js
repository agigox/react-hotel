import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class OrderSummary extends Component {

    render() {
        const {name, surname, addresse, email} = this.props.currentUser;
        return (
            <div className="user-details">
                <h2>Informations utilisateur</h2>
                <p>Nom : <strong>{name}</strong></p>
                <p>Prénom : <strong>{surname}</strong></p>
                <p>Adresse : <strong>{addresse}</strong></p>
                <p>Email : <strong>{email}</strong></p>
                <hr />
                <h2>Informations Panier</h2>
                <p>Nombre de produits dans le panier: <strong>{this.props.cart.length}</strong></p>
                <p>Total des produis: <strong>{this.props.cart.reduce((t,i) => t += i.price, 0)}€</strong></p>
                <div className='valider-panier'>
                    <Link to="/order-confirmation/">Valider</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser, 
        cart: state.cart
    }
}

export default connect(mapStateToProps)(OrderSummary);
