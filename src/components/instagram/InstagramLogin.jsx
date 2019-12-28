import React, { Component } from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from "../commons/Form";
import auth from "../../services/authService";

class InstagramLogin extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string().regex(/[a-zA-Z0-9]{3,30}/),
    password: Joi.string()
      .required()
      .min(6)
      .label("Password")
  };
  render() {
    return (
      <React.Fragment>
        <div
          className="d-flex align-items-center flex-column justify-content-center h-100 "
          id="header"
        >
          <h1 id="loginTitle" className="display-1">
            <h1 className="text- display-1 mb-5 text-monospace">
              Instagram login{" "}
              <h6 className="text-center text-monospace mt-4">
                We allmost done... Just connect to your{" "}
                {this.renderFontAsswomeHtml("instagram")} account
              </h6>
            </h1>
          </h1>
          <br />
          <form onSubmit={this.handlSubmit}>
            {this.renderInput("username")}
            {this.renderInput("password", "password")}
            <div className="form-group">
              {this.renderButton(
                "Login",
                "bg-dark text-white",
                this.renderFontAsswomeHtml("instagram")
              )}
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }

  renderFontAsswomeHtml = faClass => {
    return <i className={"fa fa-" + faClass} aria-hidden="true"></i>;
  };

  doSubmit = async () => {
    return (await this.login()) ? (window.location = "/insight") : null;
  };

  login = async () => {
    try {
      const { username, password } = this.state.data;
      await auth.loginToInstagram(username, password);
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

export default InstagramLogin;
