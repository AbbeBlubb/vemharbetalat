import React          from "react"
import {Header}       from "../Header";
import {Instructions} from "../Instructions";
import {Button}       from "../Button";
import {Paragraph}    from "../Paragraph";
import {Modal}        from "../modals/Modal";
import {Navigation}   from "../Navigation";
import {Suggestions}  from "../modals/Suggestions";
import {About}        from "../modals/About";
import {Login}        from "../modals/Login";
import Register from "../modals/Register";

export function PageStart() {
  return (
      <div className='page-start'>

        {/* Menu */}
        
        <Navigation>
          
          {/* Re-arranging the elements in .navigation will break the ::after for the <About> component */}

          <Modal render={() => <Suggestions />} useCloseButton={true}>
            <Button styleType={'transparent'} rippleEffect={false}>
              Förslag
            </Button>
          </Modal>

          <Modal render={() => <About />} useCloseButton={true}>
            <Button styleType={'transparent'} rippleEffect={false}>
              Om <span />
            </Button>
          </Modal>

          <Modal render={() => <Login />} useCloseButton={false}>
            <Button styleType={'transparent'} rippleEffect={false}>
              Logga in
            </Button>
          </Modal>

        </Navigation>

        {/* Content */}
        
        <div className='page-start__content'>
          
          <Header level={'h1'} textAlign={'center'}>
            Vem har betalat för att se vem som har betalat?
          </Header>

          <Paragraph textAlign={'left'}>
            Ta reda på det nu!
          </Paragraph>

          <Button styleType={'buy'} rippleEffect={true}>
            Betala 10 kr
          </Button>
          
          <Instructions />
          
        </div>

      </div>
  )
}
