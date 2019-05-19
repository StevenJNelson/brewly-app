import React, { Component } from "react";
import Axios from "axios";

class BeerDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "",
    beers: []
  };

  render() {
    return (
      <div>
        <img src={this.beers.image} />
      </div>
    );
  }
}
export default BeerDetails;
