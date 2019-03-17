import React from "react"
import {Header} from "./Header";
import {Instructions} from "./Instructions";

export function PageStart() {
  return (
      <div className='page-start'>
        
        Knapp
        Knapp
        Knapp
        
        <Header level={'h1'} textAlign={'center'}>
          Vem har betalat för att se vem som har betalat?
        </Header>
        
        
        Stycke
        
        KnappKöp
        
        <Instructions />
        
        
      </div>
  )
}
