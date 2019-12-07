import React from 'react';
import { ModalTriggerToOpen } from './modalTriggerToOpen';
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

  escapeKeyIsPressed = e => {
    if (e.keyCode === 27) {
      this.hideModal();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.escapeKeyIsPressed, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.escapeKeyIsPressed, false);
  }

  render() {

    const varWithClasses = this.state.show ? 'modal__background modal--display-block' : 'modal__background modal--display-none';

    return (
        <>
          <ModalTriggerToOpen 
            children={this.props.children}
            showModal={this.showModal}
          />

          {/* The modal: background, close icon, card, props.render of component, close button */}
          <div
            className={varWithClasses}
            onClick={() => this.hideModal()}
          >
            
            {/* Close icon. If click on the close icon, the click event will bubble to parent where the event is catched */}
            <img 
              className='modal__close-icon'
              src={closeIcon}
              alt='Close icon'
            />
            
            {/* Modal card-tile */}
            <div className='modal__card' onClick={event => event.stopPropagation()}>

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
