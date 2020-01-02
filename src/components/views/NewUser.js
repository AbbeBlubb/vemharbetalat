import React from 'react';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { Link } from 'react-router-dom';
import { ContentWrapper } from '../contentWrapper';
import SignupForm from '../authentication/SignupForm';


export class NewUser extends React.Component {

  render() {
    return (
      <div className='frame'>
        <Navigation styleType={'right'}>
          <Link
            to='/'
            className='menu-link'>
            &#60;&#60; Tillbaka
          </Link>
        </Navigation>

        <ContentWrapper styleType={'middle'}>
          <Header level={'h3'}>
            Skapa inloggning
          </Header>

          <SignupForm />

        </ContentWrapper>
      </div>
    );
  }
}
