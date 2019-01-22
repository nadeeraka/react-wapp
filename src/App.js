import React, { Component } from "react";
import Title from "./components/title";
import Form from "./components/form";
import API_KEY from "./util/secrets";
import axios from "axios";

class App extends Component {
  getWhether = async e => {
    e.preventDefault();
    const country = "sri lanka";
    const city = "bulathsinhala";
    const apiCall = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    console.log(apiCall);
  };
  render() {
    return (
      <div className="container">
        <Title />
        <Form getWhether={this.getWhether} />
      </div>
    );
  }
}

export default App;
