import React from "react";

const Form = () => {
  return (
    <div>
      <form action="">
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            are your email with anyone else.
          </small>
        </div>
      </form>
    </div>
  );
};
export default Form;
