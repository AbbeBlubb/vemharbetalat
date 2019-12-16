import React from 'react';

export const Counter = props => {
  return (
    <span className={'counter'}>
      {props.numberOfUsers > 0 && (
        `${props.numberOfUsers} användare har betalat`
      )}
    </span>
  );
};
