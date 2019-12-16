import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import InstaMainTable from "./components/instagram/MainTable/InstaMainTable";

class App extends React.Component {
  state = {
    isLogin: true
  };
  render() {
    return (
      <React.Fragment>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom box-shadow">
          <h1
            className="my-0 mr-md-auto font-weight-normal"
            style={{ color: "white" }}
          >
            <span style={{ color: "#00aeff" }}>ins</span>ights
          </h1>
          <nav className="my-2 my-md-0 mr-md-3">
            <a className="p-2 text-white" href="#">
              Features
            </a>
            <a className="p-2 text-white" href="#">
              Enterprise
            </a>
            <a className="p-2 text-white" href="#">
              Support
            </a>
            <a className="p-2 text-white" href="#">
              Pricing
            </a>
          </nav>
          <a className="btn btn-outline-primary" href="#">
            Sign up
          </a>
        </div>
        <div className="container-fluid main-container">
          {this.state.isLogin ? <InstaMainTable /> : <Login />}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
