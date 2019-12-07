import React from 'react';
import { reduxForm, Field } from 'redux-form';


class SignupForm extends React.Component {

  onSubmit = (formProps) => {
    console.log(formProps);
  }

  render() {
    return (
      <>
        {/* The reduxForm makes props.handleSubmit available, as arg the function to be called, as reference, not calling() */}
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>

          <label htmlFor='email'>Email</label>
          <Field
            type='text'
            name='email'
            component='input'
            placeholder='E-mail'
            autoComplete='none'
          />

          <label htmlFor='password'>Password</label>
          <Field
            type='password'
            name='password'
            component='input'
            placeholder='Password'
            autoComplete='none'
          />

          {/* The button event will be catched by parent */}
          <button>Register</button>
        </form>
      </>
    )
  }
}

export default reduxForm({ form: 'signup'})(SignupForm);
