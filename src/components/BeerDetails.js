import React from "react";
import "../App.css";

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
          <p id="detailsTagline"> {this.state.beer.tagline} </p>
        </div>
        <div className="statsContainer">
          <p id="statItem"> First Brewed: {this.state.beer.first_brewed} </p>
          <p id="statItem"> ABV: {this.state.beer.abv}% </p>
          <p id="statItem"> IBU: {this.state.beer.ibu} </p>
        </div>
        <div className="detailsContent">
          <img
            id="beerPhoto"
            src={this.state.beer.image_url}
            alt={this.state.beer.name}
          />
          <p id="detailsText"> {this.state.beer.description} </p>
          <a className="btn btn-secondary" id="backButton" href="/">
            {" "}
            Back to Search{" "}
          </a>
        </div>
      </div>
    );
  }
}
export default BeerDetails;
