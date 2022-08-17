import React, { Component } from "react";
import { connect } from "react-redux";

class GetNews extends Component {
  handleClick = (e) => {
    console.log(e.target);
    this.props.getNews();
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Get News</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getNews: () => {
    dispatch({ type: "GET_NEWS" });
  },
});

export default connect(null, mapDispatchToProps)(GetNews);
