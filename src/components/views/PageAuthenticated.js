import React from "react"
import authentication from "../helpers/authentication"

export class PageAuthenticated extends React.Component {
  constructor(props) {
    super(props);
    this.logout = authentication.logout.bind(this);
  }
  
  render() {
    return (
        <div className='padding-top-bottom-max-height-650px'>
          Yay! Logged in! <button onClick={this.logout}>LogOut</button>
        </div>
    )
  }
}
