import React from 'react';
import { requireAuthenticationHOC } from '../authentication/requireAuthenticationHOC';
import { Navigation } from '../Navigation';
import { Button } from '../Button';
import UserList from '../UserList';
import { Counter } from '../counter';
import { Paragraph } from '../Paragraph';
import { ContentWrapper } from '../contentWrapper';


class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      numberOfUsers: null
    };
  }

  numberOfUsersToState = numberOfUsers => {
    this.setState({ numberOfUsers })
  }

  signOut = () => {
    sessionStorage.removeItem('token');
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='frame'>
        <Navigation styleType={'right'}>
          <div className={'padding-top-15'}>
            <Button
              styleType={'retro'}
              rippleEffect={false}
              onClick={() => this.signOut()}
            >
              Logga ut
            </Button>
          </div>
        </Navigation>

        <ContentWrapper styleType={'column-flow'}>
          <Paragraph>
            <Counter numberOfUsers={this.state.numberOfUsers}/>
          </Paragraph>

          <UserList numberOfUsersToState={this.numberOfUsersToState} />
        </ContentWrapper>
      </div>
    );
  }
}

export default requireAuthenticationHOC(Watch);
