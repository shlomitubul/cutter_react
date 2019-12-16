import React, { Component } from "react";
import { style } from "./Filter.css";
class Filter extends React.Component {
  render() {
    return (
      <ul className="list-group" id="filter">
        <button
          className="list-group-item text-left"
          onClick={() => this.props.getFollwers()}
        >
          Followers <span class="badge badge-primary">1</span>
        </button>
        <button className="list-group-item text-left">
          Following <span class="badge badge-primary">1</span>
        </button>
        <button className="list-group-item text-left">
          Not Follow You <span class="badge badge-primary">1</span>
        </button>
        <button className="list-group-item text-left">
          You Not Follow Back <span class="badge badge-primary">1</span>
        </button>
        <button className="list-group-item text-left">
          Didnt Like Back <span class="badge badge-primary">1</span>
        </button>
      </ul>
    );
  }
}

export default Filter;
