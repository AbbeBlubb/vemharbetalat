import React from 'react';
import { ModalTriggerToOpen } from './modalTriggerToOpen';
import { ModalOptionalCloseButton } from './modalOptionalCloseButton';
import closeIcon from '../../assets/baseline_highlight_off_white_48dp.png';

export class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.modalNodeRef = React.createRef();
    this.state = {
      show: false
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    setTimeout(() => {
      this.setState({ show: false });
    }, 100);
  };

  // Because the Modal component is mounted but hidden, each mounted Modal will fire the event listener handleKeyDown for each key pressed
  handleKeyDown = e => {

    // Collect the nessesary keys
    const keys = {
      // Key 27 = escape
      27: () => this.hideModal(),
      // Key 9 = tab
      9: e => {
        // Collect elements in NodeList. querySelectorAll returns a (DOM) NodeList, similar to an array. Can be destructured to an array: [...<code>]
        const focusableElementsNodeList =
          this.modalNodeRef.current
            // Select only the active/shown modal
            .querySelector('.modal--display-block')
            // Select the elements that are focusable
            .querySelectorAll('button, input');
        const firstFocusable = focusableElementsNodeList[0];
        const lastFocusable = focusableElementsNodeList[focusableElementsNodeList.length - 1];

        // When the event is fired on the first element, and the event contains shiftKey -> tabbing backwards in loop effect
        if (e.shiftKey && e.target === firstFocusable) {
          // Whitout e.preventDefault, the tab will make 2 jumps; first the focus on the first element on the NodeList, then the tabbing itself
          e.preventDefault();
          lastFocusable.focus();
        }

        // When the event is fired on the last element, and the element doesn't contain shiftKey -> tabbing forward in loop effect
        if (!e.shiftKey && e.target === lastFocusable) {
          // Whitout e.preventDefault, the tab will make 2 jumps; first the focus on the first element on the NodeList, then the tabbing itself
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    };

    // Condition to fire a function: the state of the modal component must be to show the specific modal
    if (this.state.show === true && keys[e.keyCode]) {
      keys[e.keyCode](e);
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown, false);
  }

  render() {

    const varWithClasses = this.state.show ? 'modal__background modal--display-block' : 'modal__background modal--display-none';

    return (
      <div
        ref={this.modalNodeRef}
        className='modal'>
        {/* The component that handles the modal's corresponding trigger. It will render the trigger sent through props.children */}
        <ModalTriggerToOpen
          children={this.props.children}
          showModal={this.showModal}
        />

        {/* The modal background */}
        <div
          className={varWithClasses}
          onClick={() => this.hideModal()}
        >

          {/* Close icon. Click events bubbles to parent where it's catched */}
          <button className='modal__close-button'>
            <img
              className='modal__close-icon'
              src={closeIcon}
              alt='Close icon'
            />
          </button>

          {/* Modal card-tile. Click events are stopped from bubbeling */}
          <div className='modal__card' onClick={event => event.stopPropagation()}>

            {this.props.renderContent()}

            <ModalOptionalCloseButton
              useCloseButton={this.props.useCloseButton}
              hideModal={this.hideModal}
            />

          </div>
        </div>
      </div>
    );
  }
}
