import React from 'react';
import { withRouter } from "react-router-dom";
import { Button } from '../Button';
import { Paragraph } from '../Paragraph';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      email: '',
      password: '',
      token: null,
      errorMessage: null
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSignup = event => {

    event.preventDefault();

    // Use flags in state or use Redux flags to inform the user about the fetching
    fetch('https://cyberwall.herokuapp.com/signup', {
      method: 'POST',
      // Uploading JSON data, can be string or obj (the api expects an object)
      body: JSON.stringify({ email: this.state.email, password: this.state.password }),
      headers: { 'Content-Type': 'application/json' }
    })

    .then(response => {
      // MAKE THE ERROR HANDLING BETTER
      if (!response.ok) {
        const body = response.json();
        console.log('Response not ok: ', body) // This fires before the json() promise is ready
        const errorMessage = Object.keys(body)[0]; // Undefined, probably because of this must be in a promise
        this.setState({ errorMessage });
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    })

    .then(data => {
      return new Promise((resolve, reject) => {
        this.setState({ token: data.token || false });
        resolve(data.token);
      });
    })

    .then(token => {
      return new Promise((resolve, reject) => {
        // Set persistent state in local storage, to be read by requireAuthenticationHOC
        localStorage.setItem('token', token);
        resolve('/watch');
      });
    })

    .then(redirectURL => {
      this.props.history.push(redirectURL);
    })

    // If the promise is rejected by network or by the throw Error
    .catch(error => console.log('Error from catch: ', error));
  };

  render() {
    return (
      <>
        <form
          className={'signup-form'}
          onSubmit={event => this.handleSignup(event)}>

          <label htmlFor='email'>Användarnamn 1-20 tecken</label>
          <input
            className={'signup-form__input'}
            type='text'
            required
            name='email'
            placeholder='Användarnamn'
            value={this.state.email}
            onChange={this.handleChange}
          />

          <label htmlFor='password'>Lösenord 1-20 tecken</label>
          <input
            className={'signup-form__input'}
            type='password'
            required
            name='password'
            placeholder='Välj lösenord'
            value={this.state.password}
            onChange={this.handleChange}
          />

          {/* Eventuellt felmeddelande */}
          {this.state.errorMessage && (
              <Paragraph textAlign={'center'}>
                {this.state.errorMessage}
              </Paragraph>
          )}

          <div className={'signup-form__submit-button-wrapper'}>
            <Button
              styleType={'retro'}
              rippleEffect={false}>
              Titta in
            </Button>
          </div>
        </form>
      </>
    );
  }
}

export default withRouter(SignupForm);
