import React, { Component } from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BeerList from "./components/BeerList";
import BeerDetails from "./components/BeerDetails";
import "./App.css";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/beerlist" exact component={BeerList} />
        <Route path="/beerdetails" exact component={BeerDetails} />
      </Switch>
    );
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
