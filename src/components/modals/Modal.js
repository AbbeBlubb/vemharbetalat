import React from "react";
import {Button} from "../Button";
import closeIcon from "../../assets/baseline_highlight_off_white_48dp.png"

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    setTimeout(() => {
      this.setState({ show: false });
    }, 200)
  };
  
  handleClickOutsideModalCard = (e) => {
    //console.log('Clicked outside modal card - that is, on modal background?');
    //console.log(e.target);
    if(!this.modalCard.contains(e.target)) {
      this.hideModal()
    }
  };
  
  escapeKeyIsPressed = (e) => {
    if (e.keyCode === 27) {
      this.hideModal()
    }
  }
  
  componentDidMount() {
    this.modalBackground.addEventListener('mousedown', this.handleClickOutsideModalCard, false);
    window.addEventListener('keydown', this.escapeKeyIsPressed, false);
  }
  
  componentWillUnmount() {
    this.modalBackground.removeEventListener('mousedown', this.handleClickOutsideModalCard, false);
    window.removeEventListener('keydown', this.escapeKeyIsPressed, false);
  }
  
  render() {

    const varWithClasses = this.state.show ? 'modal__background modal--display-block' : 'modal__background modal--display-none';

    return (
        <>
          {/* Trigger wraps the props.children */}
          <section className='modal__container-for-trigger' onClick={() => this.showModal()}>
            {this.props.children}
          </section>
  
          {/* The modal: background, close icon, card, props.render of component, close button */}
          <div className={varWithClasses} ref={element => this.modalBackground = element}>
            <img className='modal__close-icon' src={closeIcon} alt='Close icon'/> {/* The close icon doesn't need to fire the hideModal because of the handleClickOutsideModalCard */}
            <div className='modal__card' ref={element => this.modalCard = element}>

              {this.props.render()}
  
              {this.props.useCloseButton && (
                <div className='align-center'>
                  <Button
                      styleType={'retro'}
                      rippleEffect={false}
                      onClick={() => this.hideModal()}>
                    Stäng
                  </Button>
                </div>
              )}

            </div>
          </div>
        </>
    );
  }
}
