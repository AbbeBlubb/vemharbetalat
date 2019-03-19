import React from "react"

export default class MainFrame extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { userIsTabbing: false }; // Not used now
    
    //this.handleMouseDownOnce = this.handleMouseDownOnce.bind(this)
    //this.handleFirstTab = this.handleFirstTab.bind(this)
  }
  
  handleMouseDownOnce() {
    document.body.classList.remove('user-is-tabbing'); // Class removed from the <body>
    window.removeEventListener('mousedown', this.handleMouseDownOnce); // When the class has been removed, the event listener can be removed
    window.addEventListener('keydown', this.handleFirstTab); // Continue to listen to keyboard keydown
  }
  
  handleFirstTab(e) {
    if (e.keyCode === 9) { // The "I am a keyboard user" key
      document.body.classList.add('user-is-tabbing'); // Class added to the <body>
      window.removeEventListener('keydown', this.handleFirstTab); // When the class is added, the event listener can be removed
      window.addEventListener('mousedown', this.handleMouseDownOnce); // The mousedown event is fired when a pointing device button is pressed on an element
    }
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    //Maby it's possible to toggle event listeners using state changes?
  }
  
  componentDidMount() {
    window.addEventListener('keydown', this.handleFirstTab)
    window.addEventListener('mousedown', this.handleMouseDownOnce)
  }
  
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleFirstTab)
    window.removeEventListener('mousedown', this.handleMouseDownOnce)
  }
  
  render() {
    return(
        <div className='main-frame'>{this.props.children}</div>
    )
  }
}
