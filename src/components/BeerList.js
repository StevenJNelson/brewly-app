import React, { Component } from "react";
import Axios from "axios";
import { Button } from "reactstrap";

class BeerList extends Component {
  state = {
    beers: [],
    loaded: false
  };

  async componentDidMount() {
    /* let url = `https://api.punkapi.com/v2/beers?beer_name=${this.props.search}`;
    await Axios.get(url).then(res => {
      this.setState({ beers: res.data });
    });
    this.setState({ loaded: true });*/
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.search !== this.props.search && this.props.search !== "") {
      let url = `https://api.punkapi.com/v2/beers?beer_name=${
        this.props.search
      }`;
      await Axios.get(url)
        .then(res => {
          this.setState({ beers: res.data });
        })
        .catch(error => error);
      this.setState({ loaded: true });
    }
  }

  /*
  async getResults() {
    let url = `https://api.punkapi.com/v2/beers?beer_name=${this.props.search}`;
    await Axios.get(url).then(res => {
      this.setState({ beers: res.data });
    });
    this.setState({ loaded: true });
  }*/

  render() {
    if (this.props.search) {
      return (
        <div className="resultInfo">
          {this.state.beers.map(beer => {
            return (
              <div className="row" key={beer.id}>
                <div className="beerCard">
                  <div className="beerInfo">
                    <h3 id="beerNameText"> {beer.name} </h3>
                    <p id="beerTaglineText"> {beer.tagline} </p>
                  </div>
                  <Button id="detailsButton" href="/beerdetails">
                    {" "}
                    Details{" "}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div> </div>;
    }
  }
}
export default BeerList;
