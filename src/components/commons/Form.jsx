import React, { Component } from "react";
import Input from "../commons/Input";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false
    });

    if (!result.error) return null;

    const errors = {};

    for (let error of result.error.details) {
      errors[error.path[0]] = error.message;
    }

    return errors;
  };

  validateProprty = (name, value) => {
    if (name === "confirmPassword") return;
    const prop = { [name]: value };
    const subSchema = { [name]: this.schema[name] };
    const { error } = Joi.validate(prop, subSchema);
    return error ? error.details[0].message : null;
  };

  handlSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = e => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProprty(
      e.currentTarget.name,
      e.currentTarget.value
    );
    errors[e.currentTarget.name] = errorMessage ? errorMessage : null;
    this.setState({ data, errors });
  };

  renderButton = (label, classes = "", additionalFontHtml = null) => (
    <button
      disabled={this.validate()}
      className={classes + " btn  btn-lg btn-block text-monospace"}
    >
      {label + " "}
      {additionalFontHtml}
    </button>
  );

  renderInput = (name, type) => (
    <Input
      name={name}
      type={type}
      value={this.state.data[name]}
      onChange={this.handleChange}
      error={this.state.errors && this.state.errors[name]}
    />
  );
}

export default Form;
