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
        'Cybertruck',
        'Chefen',
        'Snorkfröken',
        'kudden',
        'pepparkakan',
        'Cybertruck',
        'Chefen',
        'Snorkfröken',
        'kudden',
        'pepparkakan',
        'Cybertruck',
        'Chefen',
        'Snorkfröken',
        'kudden',
        'pepparkakan',
        'Cybertruck',
        'Chefen',
        'Snorkfröken',
        'kudden',
        'pepparkakan',
        'Cybertruck',
        'Chefen',
        'Snorkfröken',
        'kudden',
        'pepparkakan',
        'Cybertruck',
        'Chefen',
        'Snorkfröken',
        'kudden',
        'pepparkakan',
        'Cybertruck',
        'Chefen',
        'Snorkfröken',
        'kudden',
        'pepparkakan',
        'Cybertruck',
        'hej'
      ]
    };
  }

  componentDidMount() {
    this.props.numberOfUsersToState(this.state.userNames.length);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      this.props.numberOfUsersToState(this.state.userNames.length);
    }
  }

  render() {
    return (
      <ul className={'user-list'}>
        {this.state.userNames.map((user, index) => (
          <li
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
