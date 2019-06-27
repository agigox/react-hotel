import React, { Component } from 'react';
import Hotels from './Hotels';
import Cart from './Cart';

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Hotels />
                <Cart />
            </div>
        )
    }
}
