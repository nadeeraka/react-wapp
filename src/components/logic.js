import React, { Component } from "react";
import Decision from "./decisions";
import Form from "./form";
import AlertModal from "./modal";

class Logic extends Component {
  state = {
    decisions: ["one", "two", "three"],
    open: false,
    decision: ""
  };

  onDecision = e => {
    e.preventDefault();
    let value = e.target.elements.decision.value.trim();

    console.log(value);
    if (!value) {
      return alert("Add a option ");
    }
    this.setState(prv => {
      return {
        decisions: prv.decisions.concat(value)
      };
    });
  };

  onButton = () => {
    if (this.state.decisions.length === 0) {
      return true;
    } else {
      return false;
    }
  };
  onReset = () => {
    this.setState({
      decisions: []
    });
    return alert("Deleted all options ");
  };
  close = () => {
    this.setState({ open: false });
  };
  logic = e => {
    if (
      this.state.decisions.length === 0 ||
      this.state.decisions.length === undefined
    ) {
      return alert("add a decisions ");
    } else {
      this.setState({ open: true });

      const number = Math.floor(Math.random() * this.state.decisions.length);
      this.setState({ decision: this.state.decisions[number] });
    }
  };
  render() {
    return (
      <>
        <div className="text-center" />
        <Form onDecision={this.onDecision} onReset={this.onReset} />
        <button
          className="btn btn-success btn-block btn-lg  mt-5"
          disabled={this.onButton()}
          onClick={this.logic}
        >
          <h2 className="bt">What should i do</h2>
        </button>

        <Decision decisions={this.state.decisions} />
        <AlertModal decisions={this.state} closeModal={this.close} />
      </>
    );
  }
}

export default Logic;
