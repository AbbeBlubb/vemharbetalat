import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions'


class SignupForm extends React.Component {

  onSubmit = (formProps) => {
    console.log(formProps);
    console.log(this.props);
    this.props.signup(formProps);
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

// Pass HOCs to compose, that will apply it to the (SignupForm)
export default compose(
  // connect args: state, the imported actions object
  connect(null, actions),
  // The 'signup' will be accessible in this.props
  reduxForm({ form: 'signup'})
)(SignupForm);

//export default reduxForm({ form: 'signup'})(SignupForm);
