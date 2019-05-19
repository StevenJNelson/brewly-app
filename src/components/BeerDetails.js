import React, { Component } from "react";

class BeerDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "",
    beer: []
  };

  render() {
    return <div>{this.beer.name}</div>;
  }
}
export default BeerDetails;
