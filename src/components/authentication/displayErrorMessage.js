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
    case 'The username should not exceed 20 characters':
      errorMessageToDisplay = 'Användarnamnet får ha högst 20 tecken';
      break;
    case 'The password should not exceed 20 characters':
      errorMessageToDisplay = 'Lösenordet får ha högst 20 tecken';
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
