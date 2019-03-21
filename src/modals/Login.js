import React from "react"
import {Paragraph} from "../components/Paragraph";
import {Header} from "../components/Header";

export function Login() {
  return (
      <section>

        <Header level={'h3'} textAlign={'center'}>
          Logga in
        </Header>

        <Paragraph textAlign={'left'}>
          Fält för att logga in!
        </Paragraph>
      </section>
  )
}
