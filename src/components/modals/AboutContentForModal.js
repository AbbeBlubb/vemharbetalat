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
        Inne i inloggat läge kan du se hur många som har betalat för att se vilka som har betalat, och läsa allas avtryck.
        Hur många är de? Vad har de skrivit? Ta reda på det nu!
      </Paragraph>

      <Paragraph textAlign={'left'}>
        VemHarBetalat utvecklas på min fritid. Det är en rolig grej.
      </Paragraph>
    </section>
  );
}
