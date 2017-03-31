import React, { Component } from 'react';

class Form extends Component {

  state = {
    values: {},
    errors: {},
  }
  
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Form;
