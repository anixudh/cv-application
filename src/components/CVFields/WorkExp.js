import React from "react";
import { Component } from "react";

class WorkExp extends Component {
  render() {
    return (
      <div className="workexp">
        <form className="workexp-form">
          <label htmlFor="company-name">Company Name:</label>
          <input
            onChange={this.props.changeCompanyName}
            id="company-name"
            type="text"
          ></input>
          <label htmlFor="company-from">From:</label>
          <input
            onChange={this.props.changeCompanyFrom}
            id="company-from"
            type="date"
          ></input>
          <label htmlFor="company-to">To:</label>
          <input
            onChange={this.props.changeCompanyTo}
            id="company-to"
            type="date"
          ></input>
          <label htmlFor="position">Position:</label>
          <input
            onChange={this.props.changeCompanyPosition}
            id="position"
            type="text"
          ></input>
        </form>
      </div>
    );
  }
}

export default WorkExp;
