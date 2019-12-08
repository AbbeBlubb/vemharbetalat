import React from 'react';
import { SignupForm } from '../authentication/SignupForm';


export class PageNewUser extends React.Component {


  render() {
    return (
      <div className='padding-top-bottom-max-height-650px'>
        New user
        <br/>
        Här ska user få sina inloggningsuppgifter samt fylla i några uppgifter

        <div>Register</div>

        <SignupForm />

      </div>
    );
  }
}
