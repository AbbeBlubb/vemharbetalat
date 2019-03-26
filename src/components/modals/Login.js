import React from "react"
import firebase from '../../config/firebase'
import {Header} from "../Header";
import {Button} from "../Button";

export class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }
  
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  login(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
      console.log(error);
    });
  }
  
  render() {
    return (
        <section className='login'>
          
          <Header level={'h3'} textAlign={'center'}>
            Logga in
          </Header>
  
          <form>

            <div>
              <label form="input-email"></label>
              <input
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  className="form-control"
                  id="input-email"
                  placeholder="Användarnamn" />
            </div>
            
            <div>
              <label form="input-password"></label>
              <input
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  className="form-control"
                  id="input-password"
                  placeholder="Lösenord" />
            </div>
  
            <div className='login__button align-center'>
              <Button
                  styleType={'retro'}
                  rippleEffect={false}
                  onClick={(e) => this.login(e)}>
                Logga in
              </Button>
            </div>
          </form>

        </section>
    )
  }
}
