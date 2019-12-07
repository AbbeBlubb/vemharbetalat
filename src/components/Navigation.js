import React from 'react';

export function Navigation(props) {
  return (
    <nav className='navigation'>
      {props.children}
    </nav>
  );
}
