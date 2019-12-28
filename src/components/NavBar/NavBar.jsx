import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Cutter
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/insgiht">
                Insight-Tools
              </NavLink>
            </li>

            {this.props.user && (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/logout">
                    Log-out
                  </NavLink>
                </li>
              </React.Fragment>
            )}
            {!this.props.user && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Log-in
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
