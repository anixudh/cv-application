import React from "react";
import { Component } from "react";

class EduInfo extends Component {
  render() {
    return (
      <div className="eduinfo">
        <form className="eduinfo-form">
          <label htmlFor="school-name">School Name:</label>
          <input
            onChange={this.props.changeSchoolName}
            id="school-name"
            type="text"
            class="form-control"
          ></input>
          <label htmlFor="school-from">From:</label>
          <input
            onChange={this.props.changeSchoolFrom}
            id="school-from"
            type="date"
            class="form-control"
          ></input>
          <label htmlFor="school-to">To:</label>
          <input
            onChange={this.props.changeSchoolTo}
            id="school-to"
            type="date"
            class="form-control"
          ></input>
          <label htmlFor="score">Score:</label>
          <input
            onChange={this.props.changeSchoolScore}
            id="score"
            type="number"
            class="form-control"
          ></input>
        </form>
      </div>
    );
  }
}

export default EduInfo;
