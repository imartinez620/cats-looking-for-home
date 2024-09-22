import React, { Component } from 'react';
import CatsContainer from './cats/cats-container';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import About from "./pages/about.js"


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='title'>
          <h1>Cats Looking for a Home</h1>
          <h2>Protectora de gatos</h2>
        </div>


        <NavigationContainer />
        <CatsContainer />

      </div>
    );
  }
}
