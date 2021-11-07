import React from "react";
import { Component } from "react";

class EduInfoPreview extends Component {
  render() {
    return (
      <div className="eduinfo-preview">
        <div className="school-name">{this.props.name}</div>
        <hr />
        <div className="school-info">
          <div className="school-score">Score: {this.props.score}</div>
          <div className="school-from-to">
            {this.props.schoolFrom.substring(0, 4)}-
            {this.props.schoolTo.substring(0, 4)}
          </div>
        </div>
      </div>
    );
  }
}

export default EduInfoPreview;
