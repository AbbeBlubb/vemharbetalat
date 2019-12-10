import React from 'react';
import { Header } from '../Header';
import { Button } from '../Button';
import { Paragraph } from '../Paragraph';
import { Navigation } from '../Navigation';
import SignupForm from '../authentication/SignupForm';


export class NewUser extends React.Component {

  render() {
    return (
      <>
        <Navigation>
          <Button styleType={'transparent'} rippleEffect={false} onClick={() => this.props.history.push('/')}>
            &#60;&#60; Tillbaka
          </Button>
        </Navigation>

        <Header level={'h3'}>
          Skapa inloggning
        </Header>

        <SignupForm />
      </>
    );
  }
}
