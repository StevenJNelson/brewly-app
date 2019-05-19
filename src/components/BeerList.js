import React, { Component } from "react";
import Axios from "axios";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class BeerList extends Component {
  state = {
    beers: [],
    loaded: false,
    isDetails: false,
    isSearch: true,
    beerInfo: [],
    redirect: false
  };

  setRedirect(beer) {
    this.setState({
      redirect: true,
      beerInfo: beer
    });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/beerdetails",
            state: { beer: this.state.beerInfo }
          }}
        />
      );
    }
  };

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
                  //onClick={this.enableDetails.bind(this, beer)}
                  onClick={this.setRedirect.bind(this, beer)}
                >
                  {" "}
                  Details{" "}
                </Button>
                {this.renderRedirect()}
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
