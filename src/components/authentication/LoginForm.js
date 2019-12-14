import React from 'react';
import { Button } from '../Button';
import { Paragraph } from '../Paragraph';


export class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '', // Not in use
      password: '',
      errorMessage: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleLoginError(errorCode) {
    switch (errorCode) {

      case 'auth/invalid-email':
        this.setState({
          email: '',
          password: '',
          errorMessage: 'Ange din e-postadress'
        });
        break;

      case 'auth/user-not-found':
        this.setState({
          password: '',
          errorMessage: 'Användarnamnet matchar inte'
        });
        break;

      case 'auth/wrong-password':
        /* Om lösenordet är felaktigt, eller om lösenord ej anges men något angetts i 'användarnamn' */
        this.setState({
          password: '',
          errorMessage: 'Lösenordet matchar inte'
        });
        break;

      default: break;
    }
  }

  render() {
    return (
      <form>

        <div>
          <label htmlFor='input-username'></label>
          <input
              value={this.state.email}
              onChange={this.handleChange}
              type='text'
              name='username'
              className='form-control'
              placeholder='Användarnamn' />
        </div>

        <div>
          <label htmlFor='input-password'></label>
          <input
              value={this.state.password}
              onChange={this.handleChange}
              type='password'
              name='password'
              className='form-control'
              placeholder='Lösenord' />
        </div>

        {/* Eventuellt felmeddelande */}
        {this.state.errorMessage && (
            <Paragraph textAlign={'center'}>
              {this.state.errorMessage}
            </Paragraph>
        )}

        {/* Knapp för att logga in */}
        <div className='login__button align-center'>
          <Button
              styleType={'retro'}
              rippleEffect={false}
              onClick={e => this.login(e)}>
            Logga in
          </Button>
        </div>
      </form>
    );
  }
}
