import React from "react";
import SD from "./sd";

const Decisions = props => (
  <>
    {props.decisions.length > 0 ? (
      <div className="card mt-5">
        <h3 className="card-header text-center text-primary">
          <i className="bt">All Decisions</i>{" "}
        </h3>

        {props.decisions.map(res => {
          return (
            <li key={res}>
              <SD value={res} />{" "}
            </li>
          );
        })}
      </div>
    ) : (
      ""
    )}
  </>
);

export default Decisions;
