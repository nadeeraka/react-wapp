import React from "react";

const Weather = props => (
  <>
    {props.temp ? (
      <div className="card mt-5 op">
        <h2 className="card-header text-center text-dark ff">
          {" "}
          {props.name} Weather details{" "}
        </h2>
        <div className="card-body" />
        <h4 className=" text-center text-success pt">status : {props.main}</h4>
        <h4 className=" text-center text-success pt">
          Temperature : {props.temp}
        </h4>
        <h4 className=" text-center text-danger  pt">
          Max Temperature : {props.tempMax}
        </h4>
        <h4 className=" text-center text-info pt">
          Min Temperature : {props.tempMin}
        </h4>
        <h4 className=" text-center text-success pt">
          pressure : {props.pressure}
        </h4>
        <h4 className=" text-center text-success pt">
          description : {props.description}
        </h4>
        <div className="ml-3">
          <button className="btn btn-danger ">Clear</button>
        </div>
      </div>
    ) : (
      ""
    )}
  </>
);

export default Weather;
