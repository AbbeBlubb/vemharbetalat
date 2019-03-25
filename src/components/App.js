import React          from 'react';
import {BrowserRouter, Route, Link, Redirect, withRouter} from "react-router-dom";
import firebase           from '../config/firebase'
import {MainFrame}    from './MainFrame';
import {PageStart}    from './views/PageStart';
import {PageNewUser} from "./views/PageNewUser";
import {PageAuthenticated} from "./views/PageAuthenticated";
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
    firebase.auth().onAuthStateChanged((user) => {
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
        <BrowserRouter>
          <Route path='/'         component={PageStart}         exact />
          <Route path='/new'      component={PageNewUser}             />
          <Route path='/account'  component={PageAuthenticated}       />
        </BrowserRouter>
      </MainFrame>
    );
  }
}
