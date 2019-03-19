import React from 'react';
import MainFrame from "./MainFrame";
import {PageStart} from "./PageStart";

export default class App extends React.Component {
  
  render() {
    return (
      <MainFrame>
        <PageStart />
      </MainFrame>
    );
  }
}
