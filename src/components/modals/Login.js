import React from 'react';
import {withRouter} from 'react-router-dom';
import {Header} from '../Header';
import {Button} from '../Button';
import {Paragraph} from '../Paragraph';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLoginError = this.handleLoginError.bind(this);
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
        <section className='login'>

          <Header level={'h3'} textAlign={'center'}>
            Logga in
          </Header>

          <form>

            <div>
              <label form='input-email'></label>
              <input
                  value={this.state.email}
                  onChange={this.handleChange}
                  type='email'
                  name='email'
                  className='form-control'
                  id='input-email'
                  placeholder='Användarnamn' />
            </div>

            <div>
              <label form='input-password'></label>
              <input
                  value={this.state.password}
                  onChange={this.handleChange}
                  type='password'
                  name='password'
                  className='form-control'
                  id='input-password'
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

        </section>
    );
  }
}

export default withRouter(Login);
