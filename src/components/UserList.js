import React from 'react';
import { requireAuthenticationHOC } from './authentication/requireAuthenticationHOC';


class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      users: []
    };
  }

  fetchUsers = (fetch, URL) => {
    fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${sessionStorage.getItem('token')}`
      }
    })
    // Has to either return; inside {}, or => response.json() without {} nor .json();
    .then(response => response.json())
    .then(data => this.setState({ users: data }));
  }

  componentDidMount() {
    this.fetchUsers(
      fetch,
      'https://cyberwall.herokuapp.com/users'
    );

    //this.props.numberOfUsersToState(this.state.userNames.length);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      this.props.numberOfUsersToState(this.state.users.length);
    }
  }

  render() {
    return (
      <ul className={'user-list'}>
        {this.state.users.map((user, index) => (
          <li key={index} className={'user-list__item'}>
            <span className={'user-list__username'}>{user.username}</span>
            <span className={'user-list__date'}>{user.date.slice(2, 10)}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default requireAuthenticationHOC(UserList);
