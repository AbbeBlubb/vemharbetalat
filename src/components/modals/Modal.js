import React from 'react';
import { ModalOptionalCloseButton } from './modalOptionalCloseButton';
import closeIcon from '../../assets/baseline_highlight_off_white_48dp.png';

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
    }, 100);
  };

  handleClickOutsideModalCard = e => {

    if(!this.modalCard.contains(e.target)) {
      this.hideModal();
    }
  };

  escapeKeyIsPressed = e => {
    if (e.keyCode === 27) {
      this.hideModal();
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
            <img className='modal__close-icon' src={closeIcon} alt='Close icon'/>
            {/* The close icon doesn't need to fire the hideModal because of the handleClickOutsideModalCard */}
            <div className='modal__card' ref={element => this.modalCard = element}>

              {this.props.render()}

              <ModalOptionalCloseButton
                useCloseButton={this.props.useCloseButton}
                hideModal={this.hideModal}
              />

            </div>
          </div>
        </>
    );
  }
}
