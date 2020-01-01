import React from 'react';


export const Labeler = props => {

  const getLabelType = styleType => {
    switch (styleType) {
      case 'buy-button-now':
        return (
          <div className={`labeler__${styleType}`}>
            <div className='labeler__wrapper-for-second-transform'>
              Just nu gratis!
            </div>
          </div>
        );
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
