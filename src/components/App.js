import React, { Component } from 'react';
import {MainFrame} from "./MainFrame";
import {PageStart} from "./PageStart";

class App extends Component {
  render() {
    return (
      <MainFrame>
        <PageStart />
      </MainFrame>
    );
  }
}

export default App;
