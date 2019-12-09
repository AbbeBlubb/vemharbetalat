import React from 'react';
import { Header } from '../Header';
import { LoginForm } from '../authentication/LoginForm';


export class LoginContentForModal extends React.Component {

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
