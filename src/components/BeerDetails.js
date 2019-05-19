import React from "react";
import "../App.css";
import { Button } from "reactstrap";

class BeerDetails extends React.Component {
  state = {
    name: "",
    beer: this.props.location.state.beer
  };

  render() {
    console.log(this.state.beer);
    return (
      <div className="detailsContainer">
        <div className="titleContainer">
          <h2 id="detailsTitle"> {this.state.beer.name} </h2>
          <p> {this.state.beer.tagline} </p>
        </div>
        <div className="statsContainer">
          <p> First Brewed: {this.state.beer.first_brewed} </p>
          <p> ABV: {this.state.beer.abv} </p>
        </div>
        <div className="detailsContent">
          <img
            id="beerPhoto"
            src={this.state.beer.image_url}
            alt={this.state.beer.name}
          />
          <p id="detailsText"> {this.state.beer.description} </p>
        </div>
        <a href="/"> Back </a>
      </div>
    );
  }
}
export default BeerDetails;
