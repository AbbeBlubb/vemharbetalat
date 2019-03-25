import React                from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  withRouter}               from "react-router-dom";
import firebase             from '../config/firebase'
import {MainFrame}          from './MainFrame';
import {PageStart}          from './views/PageStart';
import {PageNewUser}        from "./views/PageNewUser";
import {PageAuthenticated}  from "./views/PageAuthenticated";
import {PageNoMatch}        from "./views/PageNoMatch";
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
        <Router>
          {/* Switch renders only the first match, thus the possibility for the NoMatch component */}
          <Switch>
            <Route exact  path='/'        component={PageStart}         />
            <Route        path='/new'     component={PageNewUser}       />
            <Route        path='/account' component={PageAuthenticated} />
            <Route                        component={PageNoMatch}       />
          </Switch>
        </Router>
      </MainFrame>
    );
  }
}
