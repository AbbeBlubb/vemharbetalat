import React from 'react';
import { Button } from '../Button'

export function NoMatch(props) {
  return (
    <section className='no-match'>
      <div className='center-absolute align-center'>
        <span className='no-match__message'>
          404
        </span>
        <Button styleType={'retro'} rippleEffect={false} onClick={() => props.history.push('/')}>
          &#60;&#60; Till startsidan
        </Button>
      </div>
    </section>
  );
}
