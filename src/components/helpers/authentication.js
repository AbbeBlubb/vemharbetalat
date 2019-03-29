import firebase from "../../config/firebase";
import authentication from "../helpers/authentication"

class Authentication {
  
  constructor() {
    this.user = null;
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.authListener = this.authListener.bind(this);
    //this.login = this.login.bind(this);
    /* NOT BOUND: createNewUser använder state + props.history i <PageNewUser> */
    /* NOT BOUND: login använder state + props.history i <Login> */
    /* NOT BOUND: logout använder props.history i <PageAuthenticated> */
  }
  
  isAuthenticated() {
    console.log('isAuthenticated(): ', !!this.user);
    return !!this.user
  }
  
  preSetUser() {
    this.user = true;
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
          this.preSetUser();
          console.log('Från createNewUser(): ', user);
          /* MEGA-PROMISE där flera saker ska göras efter varandra */
          /* NOTERA att createUserWithEmailAndPassword returnerar user.user.id, medans onAuthStateChanged returnerar user.id */
          firebase.firestore().collection('who-paid').doc(user.user.uid).set({
            name: 'abe4',
            color: 'aqua',
            timestamp: new Date()
          });
          this.props.history.push('/account');
        })
        .catch((error) => {
          this.setState({ error: error });
        });
  };
  
  sendUserData(user) {
    console.log('sendUserData called')
    firebase.firestore().collection('who-paid').doc(user.uid).set({
      name: 'abe',
      color: 'aqua'
    })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
  }
  
  login(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((u)=>{
          this.preSetUser();
          console.log('Från login(e), login fulfilled + this.preSetUser is called: ', u);
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
