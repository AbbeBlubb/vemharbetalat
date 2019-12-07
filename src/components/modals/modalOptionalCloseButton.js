import React from 'react';
import { Button } from '../Button';

export function ModalOptionalCloseButton(props) {
  return(
    <>
      {props.useCloseButton && (
        <div className='align-center'>
          <Button
              styleType={'retro'}
              rippleEffect={false}
              onClick={() => props.hideModal()}>
            Stäng
          </Button>
        </div>
      )}
    </>
  );
}
