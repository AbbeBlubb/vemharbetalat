import React from "react";
import {Button} from "./Button";

export class Modal extends React.Component {
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
  
  handleClickOutsideModalCard = (e) => {
    //console.log('Clicked outside modal card - that is, on modal background?');
    //console.log(e.target);
    if(!this.modalCard.contains(e.target)) {
      this.hideModal()
    }
  };
  
  componentDidMount() {
    this.modalBackground.addEventListener('mousedown', this.handleClickOutsideModalCard, false)
  }
  
  componentWillUnmount() {
    this.modalBackground.removeEventListener('mousedown', this.handleClickOutsideModalCard, false)
  }
  
  render() {

    const varWithClasses = this.state.show ? 'modal__background modal--display-block' : 'modal__background modal--display-none';

    return (
        <>
          <section className='modal__container-for-trigger' onClick={() => this.showModal()}>
            {this.props.children}
          </section>

          <div className={varWithClasses} ref={modalBackground => this.modalBackground = modalBackground}>
            <div className='modal__card' ref={modalCard => this.modalCard = modalCard}>

              {this.props.render()}

              <div className='align-center'>
                <span onClick={() => this.hideModal()}>
                  <Button styleType={'retro'}>
                    Stäng
                  </Button>
                </span>
              </div>

            </div>
          </div>
        </>
    );
  }
}
