import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import AppRouter from './router/AppRouter';

import Image from '../src/assets/bg.jpg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <AppRouter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
