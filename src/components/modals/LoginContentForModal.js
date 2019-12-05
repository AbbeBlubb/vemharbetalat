import React from 'react';
import { withRouter } from 'react-router-dom';
import { Header } from '../Header';
import { LoginForm } from '../authentication/LoginForm';


class LoginContentForModal extends React.Component {

  render() {
    return (
        <section className='login-content-for-modal'>
          <Header level={'h3'} textAlign={'center'}>
            Logga in
          </Header>

          <LoginForm />
        </section>
    );
  }
}

export default withRouter(LoginContentForModal);
