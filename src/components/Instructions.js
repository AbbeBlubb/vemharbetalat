import React from 'react';

export function Instructions() {
  return (
      <section className='instructions'>
        <div className='instructions__header'>Gör så här</div>
        <ol>
          <li>Klicka för att betala 10 kr</li>
          <li>Lämna ett avtryck</li>
          <li>Se vilka som har betalat! Du får en inloggning för att kunna komma tillbaka</li>
          <li>Dela</li>
        </ol>
      </section>
  );
}
