import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class OrderConfirmation extends Component {
    render() {
        return (
            <div className="order-confiramtion">
            Votre Order a ete bien confirmé <Link to="/">Home</Link>
            </div>
        )
    }
}
