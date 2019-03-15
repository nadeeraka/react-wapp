import React, { Component } from "react";
import Title from "./components/title";
import Logic from "./components/logic";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Title />
        <div className="container">
          <Logic />
        </div>
      </>
    );
  }
}

export default App;
