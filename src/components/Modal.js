import React from "react";

export default class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show: false };
  }
  
  showModal = () => {
    this.setState({ show: true });
  };
  
  hideModal = () => {
    this.setState({ show: false });
  };
  
  render() {
    return (
        <section>
          <p>Ta emot en render props</p>
          <div onClick={this.showModal}>
            {this.props.children} (children)
          </div>
        </section>
    );
  }
}
