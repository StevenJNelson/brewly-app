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

  async componentDidMount() {
    let url = `https://api.punkapi.com/v2/beers?beer_name=${this.props.name}`;
    await Axios.get(url).then(res => {
      this.setState({ beers: res.data });
    });
    this.setState({ loaded: true });
  }

  render() {
    return (
      <div>
        <img src={this.beers.image} />
      </div>
    );
  }
}
export default BeerDetails;
