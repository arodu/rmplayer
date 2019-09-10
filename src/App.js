import React, {Fragment} from 'react';
import Header from './components/Header.js';
import Content from './components/Content.js';
import Player from './components/Player.js';

function App() {
  return (
    <Fragment>
      <Header />
      <Content />
      <Player />
    </Fragment>
  );
}

export default App;
