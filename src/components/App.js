import React from 'react';
import MainFrame from './MainFrame';
import {PageStart} from './PageStart';
import './helpers/InteractionHelper';
import './helpers/waves'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <MainFrame>
        <PageStart />
      </MainFrame>
    );
  }
}
