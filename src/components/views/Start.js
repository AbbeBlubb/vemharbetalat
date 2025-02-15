import React from 'react';
import { Header } from '../Header';
import { Instructions } from '../Instructions';
import { Button } from '../Button';
import { Labeler } from '../labeler';
import { Paragraph } from '../Paragraph';
import { Navigation } from '../Navigation';
import { Modal } from '../modals/Modal';
import { AboutContentForModal } from '../modals/AboutContentForModal';
import { LoginContentForModal } from '../modals/LoginContentForModal';
import { ContentWrapper } from '../contentWrapper';


export function Start(props) {
  return (
    <div className='frame'>
      <Navigation styleType={'space-between'}>
        <Modal renderContent={() => <AboutContentForModal />} useCloseButton={true}>
          <Button styleType={'transparent'} rippleEffect={false}>
            Om VHB
          </Button>
        </Modal>

        <Modal renderContent={() => <LoginContentForModal />} useCloseButton={false}>
          <Button styleType={'transparent'} rippleEffect={false}>
            Logga in
          </Button>
        </Modal>
      </Navigation>

      <ContentWrapper styleType={'column-fixed'}>
        <Header level={'h1'} textAlign={'center'}>
          Vem har betalat för att se vem som har betalat?
        </Header>

        <Paragraph textAlign={'left'}>
          Ta reda på det nu!
        </Paragraph>

        <Labeler styleType={'buy-button-now'}>
          <Button styleType={'buy'} rippleEffect={true} onClick={() => props.history.push('/new')}>
            Betala 10 kr
          </Button>
        </Labeler>

        <Instructions />
      </ContentWrapper>
    </div>
  );
}
