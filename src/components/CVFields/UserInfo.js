import React from "react";
import { Component } from "react";

class UserInfo extends Component {
  render() {
    return (
      <div className="userinfo">
        <form className="userinfo-form">
          <label htmlFor="user-name">Name:</label>
          <input
            onChange={this.props.changeUserName}
            id="user-name"
            type="text"
          ></input>
          <label htmlFor="user-email">Email:</label>
          <input
            onChange={this.props.changeUserEmail}
            id="user-email"
            type="email"
          ></input>
          <label htmlFor="user-mobile">Mobile:</label>
          <input
            onChange={this.props.changeUserMobile}
            id="user-mobile"
            type="number"
          ></input>
          <label htmlFor="user-address">Address:</label>
          <input
            onChange={this.props.changeUserAddress}
            id="user-address"
            type="text"
          ></input>
          {/*<button onClick={this.props.submitUserInfo} type="submit">
            Submit user info
          </button>*/}
        </form>
      </div>
    );
  }
}

export default UserInfo;
