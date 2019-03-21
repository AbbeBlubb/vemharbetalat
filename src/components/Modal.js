import React from "react";
import {Button} from "./Button";

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

    const varWithClasses = this.state.show ? 'modal__background modal--display-block' : 'modal__background modal--display-none';

    return (
        <>
          <section className='modal__container-for-trigger' onClick={this.showModal}>
            {this.props.children}
          </section>

          <div className={varWithClasses} onClick={this.hideModal}>
            <div className='modal__card'>

              {this.props.render()}

              <div className='align-center'>
                <Button styleType={'retro'} onClick={this.hideModal}>
                  Stäng
                </Button>
              </div>

            </div>
          </div>
        </>
    );
  }
}
