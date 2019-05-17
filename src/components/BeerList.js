import React, { Component } from "react";
import Axios from "axios";
import Beer from "./Beer";

class BeerList extends Component {
  state = {
    beers: [],
    loaded: false
  };

  async componentDidMount() {
    let url = `https://api.punkapi.com/v2/beers?beer_name=${this.props.search}`;
    await Axios.get(url).then(res => {
      this.setState({ beers: res.data });
    });
    this.setState({ loaded: true });
  }

  render() {
    return (
      <div>
        {this.state.beers.map(beer => {
          return <p key={beer.id}> {beer.name} </p>;
        })}
      </div>
    );
  }
}
export default BeerList;
