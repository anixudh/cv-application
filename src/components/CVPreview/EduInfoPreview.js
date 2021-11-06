import React from "react";
import { Component } from "react";

class EduInfoPreview extends Component {
  render() {
    return (
      <div className="eduinfo-preview">
        <div className="school-name">School Name:{this.props.name}</div>
        <div className="school-from">From:{this.props.schoolFrom}</div>
        <div className="school-to">To:{this.props.schoolTo}</div>
        <div className="school-score">Score:{this.props.score}</div>
      </div>
    );
  }
}

export default EduInfoPreview;
