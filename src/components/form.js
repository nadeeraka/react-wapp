import React from "react";

const Form = props => {
  return (
    <div>
      <div className="card">
        <h5 className="card-header">Search weather</h5>
        <div className="card-body">
          <form onSubmit={props.getWhether}>
            <div className="form-group">
              <input
                type="text"
                name="country"
                className="form-control mb-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Country name"
              />

              <input
                type="text"
                name="city"
                className="form-control "
                id="cty"
                aria-describedby="emailHelp"
                placeholder="City name"
              />
            </div>
            <button className="btn btn-danger">Get weather</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
