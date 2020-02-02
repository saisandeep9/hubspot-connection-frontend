import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "../src/table";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <h1> hai this app</h1> */}
        <Table />
      </React.Fragment>
    );
  }
}

export default App;
