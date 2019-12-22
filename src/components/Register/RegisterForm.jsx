import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../commons/Form";
import style from "../Register/RegisterForm.css";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      confirmPassword: ""
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
      .label("Password"),
    confirmPassword: Joi.ref("password")
  };
  render() {
    return (
      <React.Fragment>
        <div
          className="d-flex align-items-center flex-column justify-content-center h-100 text-white"
          id="header"
        >
          <h1 id="registerTitle" className="display-1">
            Let's Go (:
          </h1>
          <br />
          <form onSubmit={this.handlSubmit}>
            {this.renderInput("username")}
            {this.renderInput("password", "password")}
            {this.renderInput("confirmPassword", "password")}
            <div className="form-group">
              {this.renderButton("Register", { id: "registerBtn" })}
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
