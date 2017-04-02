import React, { Component } from 'react';
import { Form, InputField, createForm } from 'redux-badass-form';
import _ from 'lodash';

const mapStateToProps = (state) => {
  return {
    customer: state.customer,
  };
};

const mapPropsToFields = (props) => {

  const { customer } = props;
  return {
    customerType: {
      value: customer.customerType,
      validations: [
        { enum: ['I', 'B', 'C'], message: 'Must be I, B or C' }
      ]
    }
    firstName: {
      value: customer.firstName,
      validations: [
        { required: true, message: 'Please enter firstname' },
        { pattern: /[a-zA-Zก-ฮ]/, message: 'Should be character only' }
      ]
    },
    lastName: {
      value: customer.lastName,
      validations: [
        customer.customerType === 'I' ? { required: true, message: 'Please enter lastname' } : undefined,
      ]
    },
    age: {
      value: customer.lastName,
      validations: [
        {
          message: 'ห้ามเกิดก่อน 1900',
          validator: (value) => {
            const momentValue = moment(value, allowFormats);
            if (momentValue.isBefore(moment('01/01/1900', 'DD/MM/YYYY'))) return false;
            return true;
          }
        }
      ]
    },
    mobile: {
      value: customer.mobile,
      validations: [
        { required: true, message: 'Please enter mobile' },
        {
          pattern: Pattern.isThaiMobile,
          min: 9,
          max: 10,
          transform: (value) => value.replace(/(\s|-)/, ''),
          message: 'รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง',
        }
      ]
    }
  };
};

const onFieldChange = (key, value) => {
  //Do after update here
  // customerType === B -> clear lastName

  if () {
    fetchSomething()
    .then(response => {

    })
  }

  return [
    {
      type: 'UPDATE/VALUE',
      key: 'lastName',
      value: '',
    }
  ]
}

@connect(mapStateToProps)
@createForm({ mapPropsToFields, onFieldChange, onSubmit })
export default class BasicForm extends Component {

  render() {

    const { customer } = this.props;

    // Form.create will create this.props.form
    const firstError = this.props.form.getError();
    const formErrors = this.props.form.getErrors();
    const hasError = this.props.form.hasError();

    return (
      <div className="container">
        <h1>Basic form</h1>
        <div>
          <InputField
            label="First Name"
            {...form.firstName}
            type="text"
          />
          <InputField
            label="Last Name"
            {...form.lastName}
            type="text"
          />
          <div>
            {firstError}
            <button disabled={hasError} onClick={this.submit}>submit</button>
          </div>
        </div>
      </div>
    );
  }
};
