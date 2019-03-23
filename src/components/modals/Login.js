import React from "react"
import {Paragraph} from "../Paragraph";
import {Header} from "../Header";

export function Login() {
  return (
      <section>

        <Header level={'h3'} textAlign={'center'}>
          Logga in
        </Header>

        <Paragraph textAlign={'left'}>
          Fält för att logga in!
          Användarnamn:
          Lösenord:
          Knapp för "logga in". Eller: stäng-knapp.
        </Paragraph>
      </section>
  )
}
