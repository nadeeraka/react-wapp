import React, { Component } from "react";
import Title from "./components/title";
import Form from "./components/form";
import API_KEY from "./util/secrets";
import Weather from "./components/weather";
import AlertModal from "./components/modal";
//import axios from "axios";

class App extends Component {
  state = {
    temp: "",
    temp_max: "",
    temp_min: "",
    humidity: "",
    pressure: "",
    wind: "",
    description: "",
    main: "",
    name: "",
    error: "",
    IsOpen: false
  };

  getWhether = async e => {
    e.preventDefault();

    const country = e.target.elements.country.value.trim();
    const city = e.target.elements.city.value.trim();
    // validation
    if (!(country && city)) {
      return alert("Please add city and location!");
    }
    // if (!typeof (country === "string")) {
    //   console.log(typeof country);
    //   return alert(" Invalid country");
    // }
    // console.log(city, country);
    // if (typeof city === Number || undefined) {
    //   return alert(" Invalid city");
    // }
    if (country.length > 24) {
      return alert("Are you kidding!");
    }
    if (city.length > 24) {
      return alert("Are you kidding!");
    }
    if (!(city.length > 1 && country.length > 1)) {
      alert("please type both fields!");
    }
    //use regex to filter
    //if()
    // api call
    console.log(city, country);
    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await apiCall.json();

    console.log(data);
    if (data.cod !== 200) {
      return alert("Server unreachable or invalid values");
    }
    // set state
    this.setState({
      temp: data.main.temp,
      temp_max: data.main.temp_max,
      temp_min: data.main.temp_min,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      wind: data.main.wind,
      name: data.main.name,
      description: data.weather[0].description,
      main: data.weather[0].main
    });
  };
  submit = () => {
    this.setState({
      temp: "",
      temp_max: "",
      temp_min: "",
      humidity: "",
      pressure: "",
      wind: "",
      description: "",
      main: "",
      name: "",
      error: "",
      IsOpen: false
    });
  };
  render() {
    return (
      <div className="container">
        <Title />
        <AlertModal />
        <Form getWhether={this.getWhether} temp={this.state.temp} />
        <Weather
          temp={this.state.temp}
          tempMax={this.state.temp_max}
          tempMin={this.state.temp_min}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          wind={this.state.wind}
          name={this.state.name}
          description={this.state.description}
          main={this.state.main}
          error={this.state.error}
          submit={this.submit}
        />
      </div>
    );
  }
}

export default App;
