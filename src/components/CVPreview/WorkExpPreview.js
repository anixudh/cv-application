import React from "react";
import { Component } from "react";

class WorkExpPreview extends Component {
  render() {
    return (
      <div className="workexp-preview">
        <div className="company-name">{this.props.name}</div>
        <hr />
        <div className="work-info">
          <div className="company-position">{this.props.position}</div>
          <div className="company-from-to">
            {this.props.companyFrom.substring(0, 4)}-
            {this.props.companyTo.substring(0, 4)}
          </div>
        </div>
      </div>
    );
  }
}

export default WorkExpPreview;
