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
        <div className="eduinfo-preview-main">
          <u className="head">Education:</u>
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
        </div>
        <div className="workexp-preview-main">
          <u className="head">Professional Experience:</u>
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
      </div>
    );
  }
}

export default PreviewMain;
