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
        Inne i inloggat läge kan du se hur många som har betalat, vad de lämnat för avtryck (permanent), kanske en chatt med tre credits, kanske en radio.
      </Paragraph>

      <Paragraph textAlign={'left'}>
        VemHarBetalat finns på fyra språk med respektive webadress: vemherbetalat.se, whodidpay.com, quienhapagado.com, och hejhej.ru.
      </Paragraph>
    </section>
  );
}
