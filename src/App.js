import React, { Component } from "react";
import Title from "./components/title";
import API_KEY from "./util/secrets";
//`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
class App extends Component {
  render() {
    return (
      <div className="container">
        <p>{API_KEY}</p>
        <Title />
      </div>
    );
  }
}

export default App;
