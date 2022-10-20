import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import AppRouter from './router/AppRouter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:3000/dashboard")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
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
