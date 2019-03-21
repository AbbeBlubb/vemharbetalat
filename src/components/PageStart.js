import React from "react"
import {Header} from "./Header";
import {Instructions} from "./Instructions";
import {Button} from "./Button";
import {Paragraph} from "./Paragraph";
import Modal from "./Modal";
import {Navigation} from "./Navigation";
import {Suggestions} from "../modals/Suggestions";
import {About} from "../modals/About";
import {Login} from "../modals/Login";

export function PageStart() {
  return (
      <div className='page-start'>

        <Navigation>

          <Modal render={() => <Suggestions />}>
            <Button styleType={'transparent'}>
              Förslag
            </Button>
          </Modal>

          <Modal render={() => <About />}>
            <Button styleType={'transparent'}>
              Om <span />
            </Button>
          </Modal>

          <Modal render={() => <Login />}>
            <Button styleType={'transparent'}>
              Logga in
            </Button>
          </Modal>

        </Navigation>


        <div className='page-start__content'>
          <Header level={'h1'} textAlign={'center'}>
            Vem har betalat för att se vem som har betalat?
          </Header>

          <Paragraph textAlign={'left'}>
            Ta reda på det nu!
          </Paragraph>

          <Button styleType={'buy'}>
            Betala 10 kr
          </Button>

          <Instructions />
        </div>

      </div>
  )
}
