import React from 'react';
import { Header } from '../Header';
import { Button } from '../Button';
import { Paragraph } from '../Paragraph';
import { Navigation } from '../Navigation';
import SignupForm from '../authentication/SignupForm';
import { ContentWrapper } from '../contentWrapper';


export class NewUser extends React.Component {

  render() {
    return (
      <>
        <Navigation>
          <Button styleType={'transparent'} rippleEffect={false} onClick={() => this.props.history.push('/')}>
            &#60;&#60; Tillbaka
          </Button>
        </Navigation>

        <ContentWrapper styleType={'middle'}>
          <Header level={'h3'}>
            Skapa inloggning
          </Header>

          <Paragraph fontStyle={'italic'}>
            Kampanj - just nu gratis!
          </Paragraph>

          <SignupForm />

        </ContentWrapper>
      </>
    );
  }
}
