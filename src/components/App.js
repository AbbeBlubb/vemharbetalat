import React                from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  withRouter}               from 'react-router-dom';
import {MainFrame}          from './MainFrame';
import {PageStart}          from './views/PageStart';
import {PageNewUser}        from './views/PageNewUser';
import {PageAuthenticated}  from './views/PageAuthenticated';
import {PageNoMatch}        from './views/PageNoMatch';
import './helpers/interactionListeners';
import './helpers/waves';
import {ProtectedRoute} from './ProtectedRoute';

export default class App extends React.Component {

  render() {
    return (
      <MainFrame>
        <Router>
          {/* Switch renders only the first match, thus the possibility for the NoMatch component */}
          <Switch>
            <Route exact    path='/'        component={PageStart}         />
            <Route          path='/new'     component={PageNewUser}       />
            <ProtectedRoute path='/account' component={PageAuthenticated} />
            <Route                          component={PageNoMatch}       />
          </Switch>
        </Router>
      </MainFrame>
    );
  }
}
