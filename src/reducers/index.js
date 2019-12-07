import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; // Rename the named export to formReducer for clarity
import { authentication } from './authentication';

export default combineReducers({
  authentication,
  form: formReducer // Key needs to be 'form'
});
