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

  componentDidUpdate(prevProps, prevState) {
    /** # Auto focus #
      - Following outline is shown due to the CSS and OtilineHandler.js:
        - 1. When user is clicking ->
          - button shows no outline (but fucus makes it possible to press enter on the focused button)
          - input shows outline
        - 2. When user is tabbing ->
          - button outline is shown
          - input shows outline
    */

    // The conditon works fine with only this.state.show === true, but comparision to prevState.show is done in case the state is expanded in the future
    if (this.state.show === true && prevState.show === false) {
      this.modalNodeRef.current
        .querySelector('.modal--display-block')
        .querySelectorAll('button, input')[1]
        .focus();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown, false);
  }

  render() {

    const varWithClasses = this.state.show ? 'modal__background modal--display-block' : 'modal__background modal--display-none';
    const varWithAriaHidden = this.state.show ? 'false' : 'true';

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
          aria-hidden={varWithAriaHidden}
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
