import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HelpPage from "./HelpPage";
import Fibonacci from "./Fibonacci";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Fibonacci Calculator</h1>
          </header>
          <br />
          <div>
            <Link to="/">Home</Link>
            <br />
            <Link to="/helppage">Help</Link>
          </div>
          <br />
          <div>
            <Route exact path="/" component={Fibonacci} />
            <Route path="/helppage" component={HelpPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
