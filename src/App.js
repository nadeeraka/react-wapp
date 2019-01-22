import React, { Component } from "react";
import Title from "./components/title";
import Form from "./components/form";
import API_KEY from "./util/secrets";
import axios from "axios";

class App extends Component {
  getWhether = async () => {
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
        <p>{API_KEY}</p>
        <Title />
        <Form />
      </div>
    );
  }
}

export default App;
