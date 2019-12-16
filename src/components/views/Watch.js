import React from 'react';
import { requireAuthenticationHOC } from '../authentication/requireAuthenticationHOC';
import { Navigation } from '../Navigation';
import { Button } from '../Button';
import UserList from '../UserList';


class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      emtpy: true
    };
  }

  signOut = () => {
    localStorage.removeItem('token');
    this.props.history.push('/');
  }

  render() {
    return (
      <>
        <Navigation>
          <Button
            styleType={'retro'}
            rippleEffect={false}
            onClick={() => this.signOut()}
          >
            Logga ut
          </Button>
        </Navigation>

        <UserList />
      </>
    );
  }
}

export default requireAuthenticationHOC(Watch);
