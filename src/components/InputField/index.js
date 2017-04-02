import React, { Component } from 'react';

export default class InputField extends Component {

  render() {

    const { children, label, value, onChange } = this.props;
    return (
      <div className="form-group">
        <label>{label}</label>
        {React.cloneElement(this.props.children, { value, onChange })}
      </div>
    );
  }
}
