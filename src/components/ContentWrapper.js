import React from 'react';

export function ContentWrapper(props) {
  return (
      <section className={`content-wrapper content-wrapper__${props.styleType}`}>
        {props.children}
      </section>
  );
}
