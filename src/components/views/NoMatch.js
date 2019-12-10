import React from 'react';
import { Button } from '../Button'

export function NoMatch(props) {
  return (
    <div className='padding-top-bottom-max-height-650px'>
      <section className='page-no-match'>
        <span className='page-no-match__message'>
          404
        </span>
        <Button styleType={'retro'} rippleEffect={false} onClick={() => props.history.push('/')}>
          &#60;&#60; Till startsidan
        </Button>
      </section>
    </div>
  );
}
