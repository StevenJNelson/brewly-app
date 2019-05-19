import React, { Component } from "react";
import Axios from "axios";
import { Button } from "reactstrap";

class BeerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      loaded: false,
      isDetails: false,
      isSearch: true,
      beerInfo: []
    };

    this.enableDetails = this.enableDetails.bind(this);
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

  enableDetails(beer) {
    this.setState({
      isDetails: true,
      isSearch: false,
      beerInfo: beer
    });
    console.log(beer);
  }

  showDetails(beer) {
    return <div> This is the details page. </div>;
  }

  render() {
    var searchPage = (
      <div className="resultInfo">
        {this.state.beers.map(beer => {
          return (
            <div className="row" key={beer.id}>
              <div className="beerCard">
                <div className="beerInfo">
                  <h3 id="beerNameText"> {beer.name} </h3>
                  <p id="beerTaglineText"> {beer.tagline} </p>
                </div>
                <Button
                  id="detailsButton"
                  onClick={this.enableDetails.bind(this, beer)}
                >
                  {" "}
                  Details{" "}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    );

    return (
      <div>
        {this.state.isSearch ? searchPage : null}
        {this.state.isDetails ? this.showDetails() : null}
      </div>
    );
  }
}
export default BeerList;
