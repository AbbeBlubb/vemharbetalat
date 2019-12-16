import React from 'react';
import { requireAuthenticationHOC } from './authentication/requireAuthenticationHOC';


class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      userNames: [
        'Chefen',
        'Snorkfröken',
        'kudden',
        'pepparkakan',
        'Cybertruck'
      ]
    };
  }

  render() {
    return (
      <ul className={'user-list'}>
        {this.state.userNames.map((user, index) => (
          <li
            className={'user-list__item'}
            key={index}
          >
            {user}
          </li>
        ))}
      </ul>
    );
  }
}

export default requireAuthenticationHOC(UserList);
