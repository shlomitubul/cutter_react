import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          class="d-flex align-items-center flex-column justify-content-center h-100 text-white"
          id="header"
        >
          <h1 id="loginTitle" class="display-1">
            Wellcome to Cutter
          </h1>
          <br />
          <form>
            <div class="form-group">
              <input
                class="form-control form-control-lg"
                placeholder="Username"
                type="text"
              />
            </div>
            <div class="form-group">
              <input
                class="form-control form-control-lg"
                placeholder="Password"
                type="password"
              />
            </div>
            <div class="form-group">
              <button id="loginBtn" class="btn btn-info btn-lg btn-block">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
