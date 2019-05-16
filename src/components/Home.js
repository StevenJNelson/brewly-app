import React, { Component } from "react";
import Axios from "axios";
import { Form, FormGroup, Input, Button } from "reactstrap";
import BeerDetails from "./BeerDetails";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    beers: null,
    search: ""
  };

  componentDidMount() {
    Axios.get("https://api.punkapi.com/v2/beers").then(res => {
      this.setState({ beers: res.data });
      console.log(res);
    });
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.search);
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    let filteredBeers = this.props.beers.filter(beer => {
      return beer.name.toLowerCase.indexOf(this.state.search) !== -1;
    });
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
                value={this.state.search}
                onChange={this.handleChange}
                name="searchCriteria"
              />
            </FormGroup>
            <FormGroup>
              <Button
                onClick={this.props.updateSearch}
                color="secondary"
                size="md"
                type="submit"
              >
                Search
              </Button>
            </FormGroup>
          </Form>
          <ul>
            {filteredBeers.map(beer => {
              return <BeerDetails beer={beer} key={beer.name} />;
            })}
          </ul>
        </header>
      </div>
    );
  }
}
export default Home;
