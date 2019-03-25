import React from "react"
import fire from '../../config/firebase';

export class PageAuthenticated extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  
  logout() {
    fire.auth().signOut();
  }
  
  render() {
    return (
        <div>
          Yay! Logged in! <button onClick={this.logout}>LogOut</button>
        </div>
    )
  }
}
