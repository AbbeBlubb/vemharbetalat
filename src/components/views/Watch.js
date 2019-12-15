import React from 'react';
import { requireAuthenticationHOC } from '../authentication/requireAuthenticationHOC';


class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      userNames: []
    };
  }

  signOut = () => {
    localStorage.removeItem('token');
    this.props.history.push('/');
  }

  render() {
    return (
      <div className=''>
        Yay! Logged in! <button onClick={() => this.signOut()}>LogOut</button>
      </div>
    );
  }
}

export default requireAuthenticationHOC(Watch);
