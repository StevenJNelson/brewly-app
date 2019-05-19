import React from "react";

class BeerDetails extends React.Component {
  state = {
    name: "",
    beer: this.props.location.state.beer
  };

  render() {
    return <div>Here are the beer deets.</div>;
  }
}
export default BeerDetails;
