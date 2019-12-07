import { AUTH_USER } from './types';

// Syntax: an arrow function that returns another arrow function
// Args: the object with email and password
export const signup = formProps => dispatch => {
  fetch('https://cyberwall.herokuapp.com/signup', {
    method: 'POST',
    // Uploading JSON data, can be string or obj (the api expects an object)
    body: JSON.stringify(formProps),
    headers: { 'Content-Type': 'application/json'}
  })
    .then(response => response.json())
    .then(json => console.log(json))
}


/*
  return {
    type: AUTH_USER,
    payload: ...
  }
*/

/*
  return (dispatch) => {
    dispatch({
      type: AUTH_USER
    })
  }
*/