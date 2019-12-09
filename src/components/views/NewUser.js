import React from 'react';
import SignupForm from '../authentication/SignupForm';
import { ContentWrapper } from '../ContentWrapper';


export class NewUser extends React.Component {


  render() {
    return (
      <ContentWrapper>
        New user
        <br/>
        Här ska user få sina inloggningsuppgifter samt fylla i några uppgifter

        <div>Register</div>

        <SignupForm />

      </ContentWrapper>
    );
  }
}
