import React from "react";

const Form = props => {
  return (
    <>
      {props.temp ? (
        ""
      ) : (
        <div className="card mt-5">
          <h5 className="card-header text-center">Type your decision</h5>
          <div className="card-body">
            <form onSubmit={props.onDecision}>
              <div className="form-group">
                <input
                  type="text"
                  name="decision"
                  className="form-control mb-3"
                  id="exampleInputEmail1"
                  placeholder="example read newspaper"
                />
              </div>
              <div className="text-center">
                <button className="btn btn-info  btn-lg mr-3" type="submit">
                  Add a decision
                </button>
                <button
                  className="btn btn-danger btn-lg"
                  onClick={props.onReset}
                >
                  Delete all
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default Form;
