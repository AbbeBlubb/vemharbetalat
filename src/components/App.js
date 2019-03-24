import React          from 'react';
import fire           from '../config/fire'
import {MainFrame}    from './MainFrame';
import {PageStart}    from './views/PageStart';
import {PageLoggedIn} from "./views/PageLoggedIn";
import './helpers/InteractionHelper';
import './helpers/waves'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.authListener = this.authListener.bind(this);
  }
  
  componentDidMount() {
    this.authListener();
  }
  
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <MainFrame>
        { this.state.user ? <PageLoggedIn /> : <PageStart /> }
      </MainFrame>
    );
  }
}
