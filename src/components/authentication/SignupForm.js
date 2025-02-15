import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '../Button';
import { Paragraph } from '../Paragraph';
import { DisplayErrorMessage } from './displayErrorMessage';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      username: '',
      email: '', // Not in use
      password: '',
      errorMessage: null
    };
  }

  handleChange = event => {
    if (event.target.value.length < 21) {
      this.setState({
        [event.target.name]: event.target.value,
        errorMessage: null
      });
    } else {
      this.setState({ errorMessage: `The ${event.target.name} should not exceed 20 characters`});
    }
  }

  handleChangeAfterError = () => {
    // TO DO
  }

  handleSignup = (event, usernameToPrepare, passwordToPrepare) => {

    // Prevent reload on form submit
    event.preventDefault();

    // Restore the errorMessage to null to clean the <DisplayErrorMessage />
    this.setState({ errorMessage: null });

    // Data massage. NOTE: the API requires the sent var names to be 'username' and 'password'
    const username = usernameToPrepare.trim();
    const password = passwordToPrepare.trim();

    // TO DO: Use flags in state or use Redux flags to inform the user about the fetching
    fetch('https://cyberwall.herokuapp.com/signup', {
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
        className={'signup-form'}
        onSubmit={event => this.handleSignup(event, this.state.username, this.state.password)}>

        <label
          className={'signup-form__label'}
          htmlFor='username'>
            Synligt användarnamn
        </label>
        <input
          className={'signup-form__input'}
          type='text'
          required
          name='username'
          placeholder='Synligt användarnamn'
          value={this.state.username}
          onChange={this.handleChange}
        />

        <label
          className={'signup-form__label'}
          htmlFor='password'>
            Lösenord
        </label>
        <input
          className={'signup-form__input'}
          type='password'
          required
          name='password'
          placeholder='Lösenord'
          value={this.state.password}
          onChange={this.handleChange}
        />

        {/* Eventuellt felmeddelande */}
        <DisplayErrorMessage errorMessage={this.state.errorMessage} />

        <Paragraph styleType='information'>
          Kom ihåg!
          Användarnamnet syns för alla i den inloggade sidan och ska därför varken innehålla namn eller e-post.
          Lösenordet krypteras och kan inte återställas.
        </Paragraph>

        <div className={'signup-form__submit-button-wrapper'}>
          <Button
            styleType={'retro'}
            rippleEffect={false}
          >
            Titta in
          </Button>
        </div>
      </form>
    );
  }
}

export default withRouter(SignupForm);
