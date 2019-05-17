import React, { Component } from "react";

class Beer extends Component {
  render() {
    return <li>{this.props.beer.name}</li>;
  }
}

export default Beer;
