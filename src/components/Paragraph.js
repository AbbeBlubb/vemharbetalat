import React from 'react';

export function Paragraph(props) {
  return (
      <p
          className='paragraph'
          style={{textAlign: props.textAlign}}>
        {props.children}
      </p>
  );
}
