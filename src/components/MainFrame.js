import React from "react"

export class MainFrame extends React.Component {



  render() {
    return(
        <div className='main-frame'>{this.props.children}</div>
    )
  }
}
