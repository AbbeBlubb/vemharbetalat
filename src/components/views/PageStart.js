import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../Header';
import { Instructions } from '../Instructions';
import { Button } from '../Button';
import { Paragraph } from '../Paragraph';
import { Navigation } from '../Navigation';
import { Modal } from '../modals/Modal';
import { AboutContentForModal } from '../modals/AboutContentForModal';
import LoginContentForModal from '../modals/LoginContentForModal';
import { ContentWrapper } from '../ContentWrapper';


export function PageStart() {
  return (
      <>
        <Navigation>
          <Modal render={() => <AboutContentForModal />} useCloseButton={true}>
            <Button styleType={'transparent'} rippleEffect={false}>
              Om VHB
            </Button>
          </Modal>

          <Modal render={() => <LoginContentForModal />} useCloseButton={false}>
            <Button styleType={'transparent'} rippleEffect={false}>
              Logga in
            </Button>
          </Modal>
        </Navigation>

        <ContentWrapper styleType={'column'}>
          <Header level={'h1'} textAlign={'center'}>
            Vem har betalat för att se vem som har betalat?
          </Header>

          <Paragraph textAlign={'left'}>
            Ta reda på det nu!
          </Paragraph>

          <Link to={'/new'}>
            <Button styleType={'buy'} rippleEffect={true}>
              Betala 10 kr
            </Button>
          </Link>

          <Instructions />
        </ContentWrapper>
      </>
  );
}
