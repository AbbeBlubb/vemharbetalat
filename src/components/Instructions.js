import React from 'react';

export function Instructions() {
  return (
      <section className='instructions'>
        <div className='instructions__header'>Gör så här</div>
        <ol>
          <li>Klicka för att betala 10 kr</li>
          <li>Se vem som har betalat och lämna ett avtryck</li>
          <li>Du får automatiskt en inloggning för att kunna komma tillbaka (gratis)</li>
          <li>Dela</li>
        </ol>
      </section>
  );
}
