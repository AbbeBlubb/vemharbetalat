import React from 'react';
import { Paragraph } from '../Paragraph';

export function DisplayErrorMessage(props) {

  let errorMessageToDisplay = '';

  switch (props.errorMessage) {
    case 'The given username is in use':
      errorMessageToDisplay = 'Användarnamnet finns redan. Välj ett nytt!';
      break;
    case 401:
      errorMessageToDisplay = 'Användarnamn och/eller lösenord är felaktigt';
      break;
    default:
      errorMessageToDisplay = props.errorMessage;
  }

  return (
    <>
    {props.errorMessage && (
      <Paragraph
        styleType='error'
        textAlign='center'
      >
      {errorMessageToDisplay}
      </Paragraph>
    )}
    </>
  );
}
