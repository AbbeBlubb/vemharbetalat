import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/main/App';
import './styles/styles.scss';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';


// Redux store
const store = createStore(
  reducers, // The combineReducers
  {}, // The initial state
  applyMiddleware(reduxThunk) // Middleware
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
