import React, { Component } from "react";
import EduInfo from "./CVFields/EduInfo";
import UserInfo from "./CVFields/UserInfo";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        email: "",
        mobile: "",
        address: "",
      },
      eduInfo: [
        {
          name: "",
          from: "",
          to: "",
          score: "",
        },
      ],
      eduInfoJSX: [],
      workExp: [],
    };
  }
  render() {
    const changeUserName = (e) => {
      this.setState({
        userInfo: {
          name: e.target.value,
          email: this.state.userInfo.email,
          mobile: this.state.userInfo.mobile,
          address: this.state.userInfo.address,
        },
        eduInfo: this.state.eduInfo,
        eduInfoJSX: this.state.eduInfoJSX,
        workExp: this.state.workExp,
      });
    };

    const changeUserEmail = (e) => {
      this.setState({
        userInfo: {
          name: this.state.userInfo.name,
          email: e.target.value,
          mobile: this.state.userInfo.mobile,
          address: this.state.userInfo.address,
        },
        eduInfo: this.state.eduInfo,
        eduInfoJSX: this.state.eduInfoJSX,
        workExp: this.state.workExp,
      });
    };

    const changeUserMobile = (e) => {
      this.setState({
        userInfo: {
          name: this.state.userInfo.name,
          email: this.state.userInfo.email,
          mobile: e.target.value,
          address: this.state.userInfo.address,
        },
        eduInfo: this.state.eduInfo,
        eduInfoJSX: this.state.eduInfoJSX,
        workExp: this.state.workExp,
      });
    };

    const changeUserAddress = (e) => {
      this.setState({
        userInfo: {
          name: this.state.userInfo.name,
          email: this.state.userInfo.email,
          mobile: this.state.userInfo.mobile,
          address: e.target.value,
        },
        eduInfo: this.state.eduInfo,
        eduInfoJSX: this.state.eduInfoJSX,
        workExp: this.state.workExp,
      });
    };

    const changeSchoolName = (e) => {
      this.setState({
        userInfo: this.state.userInfo,
        eduInfo: [
          {
            name: e.target.value,
            from: this.state.eduInfo[0].from,
            to: this.state.eduInfo[0].to,
            score: this.state.eduInfo[0].score,
          },
        ].concat(this.state.eduInfo.slice(1)),
        eduInfoJSX: this.state.eduInfoJSX,
        workExp: this.state.workExp,
      });
    };

    const changeSchoolFrom = (e) => {
      this.setState({
        userInfo: this.state.userInfo,
        eduInfo: [
          {
            name: this.state.eduInfo[0].name,
            from: e.target.value,
            to: this.state.eduInfo[0].to,
            score: this.state.eduInfo[0].score,
          },
        ].concat(this.state.eduInfo.slice(1)),
        eduInfoJSX: this.state.eduInfoJSX,
        workExp: this.state.workExp,
      });
    };

    const changeSchoolTo = (e) => {
      this.setState({
        userInfo: this.state.userInfo,
        eduInfo: [
          {
            name: this.state.eduInfo[0].name,
            from: this.state.eduInfo[0].from,
            to: e.target.value,
            score: this.state.eduInfo[0].score,
          },
        ].concat(this.state.eduInfo.slice(1)),
        eduInfoJSX: this.state.eduInfoJSX,
        workExp: this.state.workExp,
      });
    };
    const changeSchoolScore = (e) => {
      this.setState({
        userInfo: this.state.userInfo,
        eduInfo: [
          {
            name: this.state.eduInfo[0].name,
            from: this.state.eduInfo[0].from,
            to: this.state.eduInfo[0].to,
            score: e.target.value,
          },
        ].concat(this.state.eduInfo.slice(1)),
        eduInfoJSX: this.state.eduInfoJSX,
        workExp: this.state.workExp,
      });
    };

    const addEduInfo = (e) => {
      this.setState({
        userInfo: this.state.userInfo,
        eduInfo: [
          {
            name: "",
            to: "",
            from: "",
            score: "",
          },
          ...this.state.eduInfo,
        ],
        eduInfoJSX: [
          ...this.state.eduInfoJSX,
          <EduInfo
            changeSchoolName={changeSchoolName}
            changeSchoolFrom={changeSchoolFrom}
            changeSchoolTo={changeSchoolTo}
            changeSchoolScore={changeSchoolScore}
          />,
        ],
        workExp: this.state.workExp,
      });
    };

    const delEduInfo = (e) => {
      this.setState({
        userInfo: this.state.userInfo,
        eduInfo: this.state.eduInfo.slice(1),
        eduInfoJSX: this.state.eduInfoJSX.slice(0, -1),
        workExp: this.state.workExp,
      });
    };
    /*    const submitUserInfo = (e) => {
      e.preventDefault();
      console.log(this.state.userInfo);
    };*/
    return (
      <div className="main">
        This is the main field.
        <UserInfo
          changeUserName={changeUserName}
          changeUserEmail={changeUserEmail}
          changeUserMobile={changeUserMobile}
          changeUserAddress={changeUserAddress}
        />
        <EduInfo
          changeSchoolName={changeSchoolName}
          changeSchoolFrom={changeSchoolFrom}
          changeSchoolTo={changeSchoolTo}
          changeSchoolScore={changeSchoolScore}
        />
        {this.state.eduInfoJSX}
        <button onClick={addEduInfo} className="add-eduInfo">
          ADD
        </button>
        <button onClick={delEduInfo} className="del-eduInfo">
          DELETE
        </button>
        {console.log(this.state.eduInfo)}
      </div>
    );
  }
}

export default Main;
