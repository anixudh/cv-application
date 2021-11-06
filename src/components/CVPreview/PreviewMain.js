import React from "react";
import { Component } from "react";
import EduInfoPreview from "./EduInfoPreview";
import UserInfoPreview from "./UserInfoPreview";
import WorkExpPreview from "./WorkExpPreview";

class PreviewMain extends Component {
  render() {
    const { name, email, mobile, address } = this.props.userInfo;

    return (
      <div className="preview-main">
        <UserInfoPreview
          userName={name}
          userEmail={email}
          userMobile={mobile}
          userAddress={address}
        />
        {this.props.eduInfo.map((edu) => {
          return (
            <EduInfoPreview
              name={edu.name}
              schoolFrom={edu.schoolFrom}
              schoolTo={edu.schoolTo}
              score={edu.score}
            />
          );
        })}
        {this.props.workExp.map((work) => {
          return (
            <WorkExpPreview
              name={work.name}
              companyFrom={work.companyFrom}
              companyTo={work.companyTo}
              position={work.position}
            />
          );
        })}
      </div>
    );
  }
}

export default PreviewMain;
