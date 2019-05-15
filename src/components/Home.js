import React, { Component } from "react";
import Axios from "axios";
import { Form, FormGroup, Input, Button } from "reactstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    matchingBeers: null,
    loading: false,
    value: ""
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value);
  }

  getResults(event) {
    event.preventDefault();

    Axios.get(
      "https://api.punkapi.com/v2/beers?beer_name=$this.state.value"
    ).then(res => {
      this.setState({ matchingBeers: res.data });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 id="title"> Brewly </h1>
          <div className="column">
            <h4> Get to know your beer. </h4>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Input
                className="searchBox"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                name="searchCriteria"
              />
            </FormGroup>
            <FormGroup>
              <Button
                onClick={this.props.getResults}
                color="secondary"
                size="md"
                type="submit"
              >
                Search
              </Button>
            </FormGroup>
          </Form>
        </header>
      </div>
    );
  }
}
export default Home;
