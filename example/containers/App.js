import React, { Component } from 'react';
import { Form, InputField, createForm } from 'redux-badass-form';
import _ from 'lodash';

import BasicForm from './BasicForm';

export default class App extends Component {

  render() {

    return (
      <div className="container">
        <h1>Redux badass form</h1>
        <BasicForm />
      </div>
    );
  }
};
