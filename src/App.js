import React, { Component } from "react";
import Title from "./components/title";
import Form from "./components/form";
import API_KEY from "./util/secrets";
//import axios from "axios";

class App extends Component {
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
