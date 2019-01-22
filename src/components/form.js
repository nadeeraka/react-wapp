import React from "react";

const Form = () => {
  return (
    <div>
      <form onSubmit={props.getWhether}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Country name"
          />
          <label for="cty">Email address</label>

          <input
            type="text"
            className="form-control"
            id="cty"
            aria-describedby="emailHelp"
            placeholder="City name"
          />
        </div>
        <button className="btn btn-success">Get weather</button>
      </form>
    </div>
  );
};
export default Form;
