import React from "react";
import { Component } from "react";

class UserInfoPreview extends Component {
  render() {
    const { userName, userEmail, userMobile, userAddress } = this.props;
    return (
      <div className="userinfo-preview">
        <div className="userinfo-preview-left">
          <div className="userName">{userName}</div>
        </div>
        <div className="userinfo-preview-right">
          <div className="userEmail">{userEmail}📧</div>
          <div className="userMobile">{userMobile}📱</div>
          <div className="userAddress">{userAddress}📍</div>
        </div>
      </div>
    );
  }
}

export default UserInfoPreview;
