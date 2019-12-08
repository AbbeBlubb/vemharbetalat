import React from 'react';


export class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      test: ''
    };
  }

  handleSignup = () => {
    fetch('https://cyberwall.herokuapp.com/signup', {
      method: 'POST',
      // Uploading JSON data, can be string or obj (the api expects an object)
      body: '',
      headers: { 'Content-Type': 'application/json'}
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log('Error: ',error));
  };

  render() {
    return (
      <>
        {/* The reduxForm makes props.handleSubmit available, as arg the function to be called, as reference, not calling() */}
        <form onSubmit={() => {}}>

          <label htmlFor='email'>Användarnamn</label>
          <input type='text' />

          <label htmlFor='password'>Lösenord</label>
          <input type='password' />

          <button type='submit'>Register</button>
        </form>
      </>
    );
  }
}
