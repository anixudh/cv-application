import React from "react";
import { Component } from "react";

class WorkExpPreview extends Component {
  render() {
    return (
      <div className="workexp-preview">
        <div className="company-name">Company Name:{this.props.name}</div>
        <div className="company-from">From:{this.props.companyFrom}</div>
        <div className="company-to">To:{this.props.companyTo}</div>
        <div className="company-position">Position:{this.props.position}</div>
      </div>
    );
  }
}

export default WorkExpPreview;
