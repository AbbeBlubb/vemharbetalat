import firebase from "../../config/firebase";

class Authentication {
  
  constructor() {
    this.user = null;
    this.authListener = this.authListener.bind(this);
    /* createNewUser använder state + props.history i <PageNewUser> */
    /* login använder state + props.history i <Login> */
    /* logout använder props.history i <PageAuthenticated> */
  }
  
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('Från authListener():', user);
      if (user) {
        this.user = user;
        localStorage.setItem('user', user.uid);
      } else {
        this.user = null;
        localStorage.removeItem('user');
      }
    });
  }
  
  createNewUser(e) {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
          console.log('Från createNewUser(): ', user);
          this.props.history.push('/account');
        })
        .catch((error) => {
          this.setState({ error: error });
        });
  };
  
  login(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((u)=>{
          console.log('Från login(e), login fulfilled: ', u);
          this.props.history.push('/account');
        })
        .catch((error) => {
          console.error('Från login, login-error: ', error);
          this.handleLoginError(error.code);
        });
  }
  
  logout() {
    firebase.auth().signOut().then(response => {
      console.log('Från logout(): ', response);
      this.props.history.push('/');
    })
  }
}

const singleton = new Authentication();
export default singleton;
