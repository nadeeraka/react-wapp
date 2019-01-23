import React from "react";

const Weather = props => (
  <div>
    <div className="card mt-5 op">
      <h2 className="card-header text-center text-dark ff"> Weather details</h2>
      <div className="card-body" />
      <h4 className=" text-center text-success pt">
        Temperature : {props.temp}
      </h4>
      <h4 className=" text-center text-danger  pt">
        Max Temperature : {props.tempMax}
      </h4>
      <h4 className=" text-center text-info pt">
        Min Temperature : {props.tempMin}
      </h4>
    </div>
  </div>
);

export default Weather;
