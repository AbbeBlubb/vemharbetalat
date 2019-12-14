import React from 'react';

export function Paragraph(props) {
  return (
    <p
        className={`paragraph paragraph__${props.styleType}`}
        style={{
          textAlign: props.textAlign || null,
          fontStyle: props.fontStyle || null,
          margin: props.margin || null,
          textDecoration: props.textDecoration || null
        }}>
      {props.children}
    </p>
  );
}
