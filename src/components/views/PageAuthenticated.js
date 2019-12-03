import React from "react"

export class PageAuthenticated extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      keyOne: null
    };
  }

  render() {
    return (
        <div className='padding-top-bottom-max-height-650px'>
          Yay! Logged in! <button onClick={console.log('Stek')}>LogOut</button>
        </div>
    );
  }
}
