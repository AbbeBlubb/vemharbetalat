import React from "react"
import {Header} from "./Header";
import {Instructions} from "./Instructions";
import {Button} from "./Button";
import {Paragraph} from "./Paragraph";
import Modal from "./Modal";

export function PageStart() {
  return (
      <div className='page-start'>
        
        <Button styleType={'transparent'}>
          Förslag
        </Button>
        
        <Button styleType={'transparent'}>
          Om VemHarBetalat
        </Button>
        
        <Button styleType={'transparent'}>
          Logga in
        </Button>
        
        <Modal>
          Modal-test
        </Modal>
        
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
  )
}
