import React, { Component } from 'react';

import Fade from "./use-section";
import Header from "./header";
import Header1 from "./header1";
import Brands from  "./brands";
import Stats from "./stats";
import Offices from "./offices";
import "bootstrap/dist/css/bootstrap.min.css";
// import {Animated} from "react-animated-css";
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Header1/>
        <Fade/>
        < Brands />
        <Stats/>
        <Offices/>
      </div>
    );
  }
}

export default App;
