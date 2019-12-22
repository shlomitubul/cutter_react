import React, { Component } from "react";

const Input = props => {
  return (
    <div className="form-group">
      <input
        className="form-control form-control-lg"
        placeholder={props.name}
        type={props.type}
        name={props.name}
        id={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};
export default Input;
