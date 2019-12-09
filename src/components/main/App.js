import React from 'react';
// Import the BrowserRotuer or HashRouter as Router to aviod to change the component name in the JSX
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainFrame } from './MainFrame';
import { Start } from '../views/Start';
import { NewUser } from '../views/NewUser';
import Watch from '../views/Watch';
import { NoMatch } from '../views/NoMatch';
import { OutlineHandler } from './OutlineHandler';
import '../../libraries/waves';


// Handle outlines when tabbing and clicking
const outlineHandlerSingleton = new OutlineHandler();


export default class App extends React.Component {

  render() {
    return (
      <MainFrame>
        <Router>
          {/* Switch renders only the first match, thus the possibility for the NoMatch component */}
          <Switch>
            <Route exact path='/' component={Start} />
            <Route path='/new' component={NewUser} />
            <Route path='/watch' component={Watch} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </MainFrame>
    );
  }
}
