import React from "react";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Clicked on Modal -> children');
  }

  render() {

    const varWithClasses = this.state.show ? 'modal__background display-block' : 'modal__background display-none';

    return (
        <>
          <section className='modal__container-for-trigger' onClick={this.showModal}>
            {this.props.children}
          </section>

          <div className={varWithClasses}>
            <div className='modal__card'>
              <div >
                {this.props.render()}
                <div><button onClick={this.hideModal}>Stäng</button></div>
              </div>
            </div>
          </div>
        </>
    );
  }
}
