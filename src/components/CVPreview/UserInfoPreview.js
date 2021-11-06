import React from "react";
import { Component } from "react";

class UserInfoPreview extends Component {
  render() {
    const { userName, userEmail, userMobile, userAddress } = this.props;
    return (
      <div className="userinfo-preview">
        <div className="userName">Name:{userName}</div>
        <div className="userEmail">Email:{userEmail}</div>
        <div className="userMobile">Mobile:{userMobile}</div>
        <div className="userAddress">Location:{userAddress}</div>
      </div>
    );
  }
}

export default UserInfoPreview;
