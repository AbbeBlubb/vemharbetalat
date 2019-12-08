import React from 'react';


export class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      username: '',
      password: '',
      error: null
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSignup = event => {
    event.preventDefault();
    fetch('https://cyberwall.herokuapp.com/signup', {
      method: 'POST',
      //mode: 'no-cors',
      // Uploading JSON data, can be string or obj (the api expects an object)
      body: JSON.stringify({ email: this.state.username, password: this.state.password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (!response.ok) {
          const body = response.json();
          console.log(body)
          const message = Object.keys(body)[0];
          this.setState({ error: message });
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .then(json => {console.log(json)})
      // If the promise is rejected by network or by the throw Error
      .catch(error => console.log(error));
  };

  render() {
    return (
      <>
        {/* The reduxForm makes props.handleSubmit available, as arg the function to be called, as reference, not calling() */}
        <form onSubmit={event => this.handleSignup(event)}>

          <label htmlFor='email'>Användarnamn</label>
          <input
            type='text'
            name='username'
            placeholser='Användarnamn'
            value={this.state.username}
            onChange={this.handleChange}
          />

          <label htmlFor='password'>Lösenord</label>
          <input
            type='password'
            name='password'
            placeholser='Lösenord'
            value={this.state.password}
            onChange={this.handleChange}
          />

          {this.state.error && <div>{this.state.error.message}</div>}

          <button type='submit'>Register</button>
        </form>
      </>
    );
  }
}
