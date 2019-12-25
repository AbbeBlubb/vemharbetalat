import React from 'react';
import {Paragraph} from '../Paragraph';
import {Header} from '../Header';

export function AboutContentForModal() {
  return (
    <section>
      <Header level={'h3'} textAlign={'center'}>
        Om VemHarBetalat
      </Header>

      <Paragraph textAlign={'left'}>
        Nyfiken?
        Inne i inloggat läge kan du se vilka som har betalat och hur många de är.
        Hur många är de egentligen?
        Vad har de valt för användarnamn?
        Kommer antalet öka med tiden?
        Nu har du chansen.
        Ta reda på allt nu!!
      </Paragraph>
    </section>
  );
}
