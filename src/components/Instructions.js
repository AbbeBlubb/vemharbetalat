import React from 'react';

export function Instructions() {
  return (
    <article className='instructions'>
      <div className='instructions__header'>Gör så här</div>
      <ol>
        <li>Klicka för att betala 10 kr</li>
        <li>Välj användarnamn</li>
        <li>Se vilka som har betalat! Du får en inloggning för att kunna komma tillbaka</li>
        <li>Dela</li>
      </ol>
    </article>
  );
}
