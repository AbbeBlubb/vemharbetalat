import React from 'react';
import {
  // Import the BrowserRotuer or HashRouter as Router to aviod to change the component name in the JSX
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';
import { MainFrame } from './MainFrame';
import { PageStart } from '../views/PageStart';
import { PageNewUser } from '../views/PageNewUser';
import { PageAuthenticated } from '../views/PageAuthenticated';
import { PageNoMatch } from '../views/PageNoMatch';
import { OutlineHandler } from './OutlineHandler';
import '../../libraries/waves';
import { ProtectedRoute } from '../ProtectedRoute';


// Handle outlines when tabbing and clicking
const outlineHandlerSingleton = new OutlineHandler();


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
