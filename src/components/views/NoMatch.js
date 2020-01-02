import React from 'react';
import { Button } from '../Button';

export function NoMatch(props) {

  const handleClick = () => {
    setTimeout(() => {
      props.history.push('/');
    }, 100);
  };

  return (
    <section className='no-match'>
      <div className='no-match__box center-absolute align-center'>
        <span className='no-match__message'>
          404
        </span>
        <Button
          styleType={'retro'}
          rippleEffect={false}
          onClick={() => handleClick()}>
          &#60;&#60; Till startsidan
        </Button>
      </div>
    </section>
  );
}
