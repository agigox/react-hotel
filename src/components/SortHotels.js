import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";


class SortHotels extends Component {

    handleClick = (e) => {
        this.props.sortHotels();
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Sort By Price</button>
            </div>
            
        )
    }
}


const mapDispatchToProps = dispatch => ({
    sortHotels: () => {
        dispatch({type: 'SORT_HOTELS'})
    }
});

export default withRouter(connect(null, mapDispatchToProps)(SortHotels));