import React from 'react';
import { withRouter } from "react-router-dom";


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      email: '',
      password: '',
      token: null,
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
      body: JSON.stringify({ email: this.state.email, password: this.state.password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        // MAKE THE ERROR HANDLING BETTER
        if (!response.ok) {
          const body = response.json();
          console.log('Response not ok: ', body) // This fires before the json() promise is ready
          const message = Object.keys(body)[0]; // Undefined, probably because of this must be in a promise
          this.setState({ error: message });
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .then(json => {
        // Set persistent state in local storage, to be read by requireAuthenticationHOC
        this.setState({ token: json.token || false });
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          localStorage.setItem('token', this.state.token);
          resolve('/watch');
        });
      })
      .then(persistentState => {
        this.props.history.push(persistentState);
      })
      // If the promise is rejected by network or by the throw Error
      .catch(error => console.log('Error from catch: ', error));
  };

  render() {
    return (
      <>
        {/* The reduxForm makes props.handleSubmit available, as arg the function to be called, as reference, not calling() */}
        <form onSubmit={event => this.handleSignup(event)}>

          <label htmlFor='email'>Användarnamn</label>
          <input
            type='email'
            required
            name='email'
            placeholser='Användarnamn'
            value={this.state.email}
            onChange={this.handleChange}
          />

          <label htmlFor='password'>Lösenord</label>
          <input
            type='password'
            required
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

export default withRouter(SignupForm);
