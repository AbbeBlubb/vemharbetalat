import React from 'react';

export function Navigation(props) {
  return (
    <nav className={`navigation navigation__${props.styleType || `space-between`}`}>
      {props.children}
    </nav>
  );
}
