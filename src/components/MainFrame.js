import React from "react"

export default class MainFrame extends React.Component {



  render() {
    return(
        <div className='main-frame'>{this.props.children}</div>
    )
  }
}
