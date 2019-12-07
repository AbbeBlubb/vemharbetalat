import React from 'react';

// Wraps and renders the trigger/button for the modal
export function ModalTriggerToOpen(props) {
  return(
      <section
        className='modal__container-for-trigger'
        onClick={() => props.showModal()}>
        {props.children}
      </section>
  );
}
