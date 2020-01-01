import React from 'react';


export const Labeler = props => {

  const getLabelType = styleType => {
    switch (styleType) {
      case 'button-now':
        return <div className={`labeler__${styleType}`}>Just nu gratis!</div>;
      default:
        break;
    }
  };

  return (
    <div className={`labeler`}>
      <div className='labeler__children'>
        {props.children}
      </div>

      {getLabelType(props.styleType)}

    </div>
  );
};
