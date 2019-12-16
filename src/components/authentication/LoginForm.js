import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '../Button';
import { DisplayErrorMessage } from './displayErrorMessage';


class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '', // Not in use
      password: '',
      errorMessage: null
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleChangeAfterError = () => {
    // TO DO
  }

  handleSignin = (event, username, password) => {

    // Prevent reload on form submit
    event.preventDefault();

    // Restore the errorMessage to null to clean the <DisplayErrorMessage />
    this.setState({ errorMessage: null });

    // TO DO: Use flags in state or use Redux flags to inform the user about the fetching
    fetch('https://cyberwall.herokuapp.com/signin', {
      method: 'POST',
      // Uploading JSON data, can be string or obj (the api expects an object)
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    })

    .then(response => {
      if (!response.ok) {

        return new Promise((resolve, reject) => {
          // For login response Unauthorized
          if(response.status === 401) {
            resolve({ error: response.status });
          } else {
          // For signup errors
            const data = response.json();
            resolve(data);
          }
        })

        .then(data => {
          this.setState({
            errorMessage: data.error
          });
        });

      } else {

        return new Promise((resolve, reject) => {
          const data = response.json();
          resolve(data);
        });
      }
    })

    .then(data => {
      return new Promise((resolve, reject) => {
        // Set persistent state in local storage, to be read by requireAuthenticationHOC
        sessionStorage.setItem('token', data.token);
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
      <form
        className={'login-form'}
        onSubmit={event => this.handleSignin(event, this.state.username, this.state.password)}
      >

        <input
        className='form-control'
          type='text'
          required
          name='username'
          placeholder='Användarnamn'
          value={this.state.username}
          onChange={this.handleChange}
          aria-label={'Skriv in ditt användarnamn'}
        />

        <input
          type='password'
          required
          name='password'
          placeholder='Lösenord'
          value={this.state.password}
          onChange={this.handleChange}
          aria-label={'Skriv in ditt lösenord'}
        />

        {/* Eventuellt felmeddelande */}
        <DisplayErrorMessage errorMessage={this.state.errorMessage} />

        <div className={'align-center'}>
          <Button
              styleType={'retro'}
              rippleEffect={false}
          >
            Loga in
          </Button>
        </div>
      </form>
    );
  }
}

export default withRouter(LoginForm);
