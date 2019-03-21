import React from "react"
import {Paragraph} from "../components/Paragraph";
import {Header} from "../components/Header";

export function About() {
  return (
      <section>

        <Header level={'h3'} textAlign={'center'}>
          Om VemHarBetalat
        </Header>

        <Paragraph textAlign={'left'}>
          Bla bla!
        </Paragraph>

      </section>
  )
}
