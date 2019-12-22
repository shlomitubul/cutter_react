import React, { Component } from "react";
import Joi from "joi-browser";
import "./Login.css";
import Form from "../commons/Form";

class Login extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .required()
      .min(8)
      .label("Username"),
    password: Joi.string()
      .required()
      .min(8)
      .label("Password")
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="d-flex align-items-center flex-column justify-content-center h-100 text-white"
          id="header"
        >
          <h1 id="loginTitle" className="display-1">
            Wellcome to Cutter
          </h1>
          <br />
          <form onSubmit={this.handlSubmit}>
            {this.renderInput("username")}
            {this.renderInput("password", "password")}
            <div className="form-group">
              {this.renderButton("Login", { id: "loginBtn" })}
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default Login;
