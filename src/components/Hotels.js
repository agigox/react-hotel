import React, { Component } from 'react';
import HotelItem from './HotelItem';
import { connect } from 'react-redux';

class Hotels extends Component {
    render() {
        return (
            <div className='hotels'>
                {this.props.hotels2.map((hotel, i) => {
                    return <HotelItem key={i} hotel={hotel} />
                })}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        hotels2: state.hotels
    }
}

export default connect(mapStateToProps)(Hotels);