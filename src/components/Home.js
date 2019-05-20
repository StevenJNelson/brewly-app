import React, { Component } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import BeerList from "./BeerList";
import { FaBeer } from "react-icons/fa";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    filteredBeers: [],
    search: ""
  };

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 id="title">
            {" "}
            Brewly <FaBeer id="beerIcon" />{" "}
          </h1>
          <div className="column">
            <h4> Start typing to search our beers. </h4>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Input
                className="searchBox"
                type="text"
                value={this.state.search}
                onChange={this.handleChange}
                name="searchCriteria"
                autoComplete="off"
              />
            </FormGroup>
          </Form>
          <div className="resultsContainer">
            <BeerList search={this.state.search} />
          </div>
        </header>
      </div>
    );
  }
}
export default Home;
