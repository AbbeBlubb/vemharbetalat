import React from 'react';

export function ContentWrapper(props) {
  return (
    <section className={`content-wrapper content-wrapper__${props.styleType}-first-layer`}>
      <div className={`content-wrapper__${props.styleType}`}>
        {props.children}
      </div>
    </section>
  );
}
