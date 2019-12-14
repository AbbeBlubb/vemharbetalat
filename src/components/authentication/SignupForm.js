import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '../Button';
import { Paragraph } from '../Paragraph';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      username: '',
      email: '',
      password: '',
      token: null,
      errorMessage: null
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  displayErrorMessage = errorMessage => {
    let errorMessageToDisplay = '';

    switch (errorMessage) {
      case 'The given username is in use':
        errorMessageToDisplay = 'Användarnamnet finns redan. Välj ett nytt!';
        break;
      default:
        errorMessageToDisplay = errorMessage;
    }

    return (
      <Paragraph
        styleType='error'
        textAlign='center'
      >
      {errorMessageToDisplay}
      </Paragraph>
    );
  }

  handleChangeAfterError = () => {
    console.log('test')
  }

  handleSignup = (event, username, password) => {

    event.preventDefault();

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
          const data = response.json();
          resolve(data);
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
        this.setState({
          token: data.token || false
        });
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
          onSubmit={event => this.handleSignup(event, this.state.username, this.state.password)}>

          <label htmlFor='username'>Användarnamn 1-20 tecken</label>
          <input
            className={'signup-form__input'}
            type='text'
            required
            name='username'
            placeholder='Användarnamn'
            value={this.state.username}
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

          <div className='align-center'>
          {/* Eventuellt felmeddelande */}
          {this.state.errorMessage && this.displayErrorMessage(this.state.errorMessage)}
          </div>

          <Paragraph styleType='information'>
            Användarnamnet syns för alla i den inloggade sidan och ska därför varken innehålla namn eller e-post.
            Lösenordet krypteras och kan inte återställas.
          </Paragraph>

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
