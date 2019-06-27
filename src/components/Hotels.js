import React, { Component } from 'react';
import HotelItem from './HotelItem';
import { connect } from 'react-redux';

class Hotels extends Component {
    render() {
        
        return (
            <div className='hotels'>
                {this.props.hotels.map((hotel, i) => {
                    return <HotelItem key={i} hotel={hotel} />
                })}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        hotels: state.hotels
    }
}

export default connect(mapStateToProps)(Hotels);