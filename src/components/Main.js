import React, { Component } from "react";
import EduInfo from "./CVFields/EduInfo";
import UserInfo from "./CVFields/UserInfo";
import WorkExp from "./CVFields/WorkExp";

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
          schoolFrom: "",
          schoolTo: "",
          score: "",
        },
      ],
      eduInfoJSX: [],
      workExp: [
        {
          name: "",
          companyFrom: "",
          companyTo: "",
          position: "",
        },
      ],
      workExpJSX: [],
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
        workExpJSX: this.state.workExpJSX,
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
        workExpJSX: this.state.workExpJSX,
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
        workExpJSX: this.state.workExpJSX,
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
        workExpJSX: this.state.workExpJSX,
      });
    };

    const changeSchoolName = (e) => {
      this.setState({
        userInfo: this.state.userInfo,
        eduInfo: [
          {
            name: e.target.value,
            schoolFrom: this.state.eduInfo[0].schoolFrom,
            schoolTo: this.state.eduInfo[0].schoolTo,
            score: this.state.eduInfo[0].score,
          },
        ].concat(this.state.eduInfo.slice(1)),
        eduInfoJSX: this.state.eduInfoJSX,
        workExp: this.state.workExp,
        workExpJSX: this.state.workExpJSX,
      });
    };

    const changeSchoolFrom = (e) => {
      this.setState({
        userInfo: this.state.userInfo,
        eduInfo: [
          {
            name: this.state.eduInfo[0].name,
            schoolFrom: e.target.value,
            schoolTo: this.state.eduInfo[0].schoolTo,
            score: this.state.eduInfo[0].score,
          },
        ].concat(this.state.eduInfo.slice(1)),
        eduInfoJSX: this.state.eduInfoJSX,
        workExp: this.state.workExp,
        workExpJSX: this.state.workExpJSX,
      });
    };

    const changeSchoolTo = (e) => {
      this.setState({
        userInfo: this.state.userInfo,
        eduInfo: [
          {
            name: this.state.eduInfo[0].name,
            schoolFrom: this.state.eduInfo[0].schoolFrom,
            schoolTo: e.target.value,
            score: this.state.eduInfo[0].score,
          },
        ].concat(this.state.eduInfo.slice(1)),
        eduInfoJSX: this.state.eduInfoJSX,
        workExp: this.state.workExp,
        workExpJSX: this.state.workExpJSX,
      });
    };
    const changeSchoolScore = (e) => {
      this.setState({
        userInfo: this.state.userInfo,
        eduInfo: [
          {
            name: this.state.eduInfo[0].name,
            schoolFrom: this.state.eduInfo[0].schoolFrom,
            schoolTo: this.state.eduInfo[0].schoolTo,
            score: e.target.value,
          },
        ].concat(this.state.eduInfo.slice(1)),
        eduInfoJSX: this.state.eduInfoJSX,
        workExp: this.state.workExp,
        workExpJSX: this.state.workExpJSX,
      });
    };

    const addEduInfo = (e) => {
      this.setState({
        userInfo: this.state.userInfo,
        eduInfo: [
          {
            name: "",
            schoolTo: "",
            schoolFrom: "",
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
        workExpJSX: this.state.workExpJSX,
      });
    };

    const delEduInfo = (e) => {
      this.setState({
        userInfo: this.state.userInfo,
        eduInfo: this.state.eduInfo.slice(1),
        eduInfoJSX: this.state.eduInfoJSX.slice(0, -1),
        workExp: this.state.workExp,
        workExpJSX: this.state.workExpJSX,
      });
    };
    const changeCompanyName = (e) => {
      this.setState({
        userInfo: this.state.userInfo,
        eduInfo: this.state.eduInfo,
        eduInfoJSX: this.state.eduInfoJSX,
        workExp: [
          {
            name: e.target.value,
            companyFrom: this.state.workExp[0].companyFrom,
            companyTo: this.state.workExp[0].companyTo,
            position: this.state.workExp[0].position,
          },
        ].concat(this.state.workExp.slice(1)),
        workExpJSX: this.state.workExpJSX,
      });
    };

    const changeCompanyFrom = (e) => {
      this.setState({
        userInfo: this.state.userInfo,
        eduInfo: this.state.eduInfo,
        eduInfoJSX: this.state.eduInfoJSX,
        workExp: [
          {
            name: this.state.workExp[0].name,
            companyFrom: e.target.value,
            companyTo: this.state.workExp[0].companyTo,
            position: this.state.workExp[0].position,
          },
        ].concat(this.state.workExp.slice(1)),
        workExpJSX: this.state.workExpJSX,
      });
    };

    const changeCompanyTo = (e) => {
      this.setState({
        userInfo: this.state.userInfo,
        eduInfo: this.state.eduInfo,
        eduInfoJSX: this.state.eduInfoJSX,
        workExp: [
          {
            name: this.state.workExp[0].name,
            companyFrom: this.state.workExp[0].companyFrom,
            companyTo: e.target.value,
            position: this.state.workExp[0].position,
          },
        ].concat(this.state.workExp.slice(1)),
        workExpJSX: this.state.workExpJSX,
      });
    };
    const changeCompanyPosition = (e) => {
      this.setState({
        userInfo: this.state.userInfo,
        eduInfo: this.state.eduInfo,
        eduInfoJSX: this.state.eduInfoJSX,
        workExp: [
          {
            name: this.state.workExp[0].name,
            companyFrom: this.state.workExp[0].companyFrom,
            companyTo: this.state.workExp[0].companyTo,
            position: e.target.value,
          },
        ].concat(this.state.workExp.slice(1)),
        workExpJSX: this.state.workExpJSX,
      });
    };

    const addWorkExp = (e) => {
      this.setState({
        userInfo: this.state.userInfo,
        eduInfo: this.state.eduInfo,
        eduInfoJSX: this.state.eduInfoJSX,
        workExp: [
          {
            name: "",
            companyTo: "",
            companyFrom: "",
            position: "",
          },
          ...this.state.workExp,
        ],
        workExpJSX: [
          ...this.state.workExpJSX,
          <WorkExp
            changeCompanyName={changeCompanyName}
            changeCompanyFrom={changeCompanyFrom}
            changeCompanyTo={changeCompanyTo}
            changeCompanyPosition={changeCompanyPosition}
          />,
        ],
      });
      console.log(this.state);
    };

    const delWorkExp = (e) => {
      this.setState({
        userInfo: this.state.userInfo,
        eduInfo: this.state.eduInfo,
        eduInfoJSX: this.state.eduInfoJSX,
        workExp: this.state.workExp.slice(1),
        workExpJSX: this.state.workExpJSX.slice(0, -1),
      });
      console.log(this.state);
    };

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
        <WorkExp
          changeCompanyName={changeCompanyName}
          changeCompanyFrom={changeCompanyFrom}
          changeCompanyTo={changeCompanyTo}
          changeCompanyPosition={changeCompanyPosition}
        />
        {this.state.workExpJSX}
        <button onClick={addWorkExp} className="add-workExp">
          ADD
        </button>
        <button onClick={delWorkExp} className="del-workExp">
          DELETE
        </button>
      </div>
    );
  }
}

export default Main;
