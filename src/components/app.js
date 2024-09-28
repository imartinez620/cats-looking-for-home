import React, { Component } from 'react';
import CatsContainer from './cats/cats-container';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";

import Home from "./pages/home.js"
import About from "./pages/about.js"
import Cats from "./pages/cats.js"
import CatsAdopted from "./pages/cats-adopted.js"
import MyCats from "./pages/my-cats.js"
import Auth from "./pages/auth"


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }
  }

  autorizedPages() {
    return [
      <Route path="/my-cats" component={MyCats} />];
  }

  render() {
    return (
      <div className='app'>
        <div className='title'>
          <h1>Cats Looking for a Home</h1>
        </div>






        <div className='container'>


          <Router>
            <div>
              <NavigationContainer />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cats" component={Cats} />
                <Route path="/adopted" component={CatsAdopted} />

                {this.state.loggedInStatus === "LOGGED_IN" ? (this.autorizedPages()) : null}
                <Route path="/about" component={About} />
                <Route path="/auth" component={Auth} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}
