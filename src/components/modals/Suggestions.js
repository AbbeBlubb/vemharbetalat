import React from 'react';
import { Paragraph } from '../Paragraph';
import { Header } from '../Header';

export function Suggestions() {
  return (
      <section>

        <Header level={'h3'} textAlign={'center'}>
          Förslagslåda
        </Header>

        <Paragraph textAlign={'left'}>
          Lämna gärna förslag på nya funktioner och förbättringar!
        </Paragraph>
        <div>Text input</div>
        <div>Knapp för att skicka</div>
        <br/>

      </section>
  );
}
