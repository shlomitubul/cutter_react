import React, { Component } from "react";
import Joi from "joi-browser";
import "./Login.css";
import Form from "../commons/Form";
import auth from "../../services/authService";
import { toast } from "react-toastify";

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
              {this.renderButton("Login", "bg-dark text-white")}
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }

  doSubmit = async () => {
    return (await this.login()) ? (window.location = "/InstagramLogin") : null;
  };

  login = async () => {
    try {
      const { username, password } = this.state.data;
      await auth.login(username, password);
    } catch (error) {
      const errors = { ...this.state.errors };
      if (error.isServerError) {
        toast.error(error.reason);
      } else {
        errors.username = error.reason;
        this.setState({ errors });
      }
      return false;
    }
    return true;
  };
}
export default Login;
