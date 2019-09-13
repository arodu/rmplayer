import React, {Fragment, Component} from 'react';
import Header from './components/Header.js';
import Player from './components/Player.js';
import Content from './components/Content.js';

import LibraryProvider from './context/LibraryContext.js';

class App extends Component{

  state = {
    current: {
      item: null,
      position: null,
    },
    play: false,
  }

  constructor(props){
    super(props)
    this.audio = new Audio()
  }

  handleCurrentPlay = (item, position, play) => {
    this.setState({
      current: {
        item: item,
        position: position,
      },
      play: play,
    })
  }

  render(){
    let {current} = this.state

    if(current.item !== null){
      this.loadAudio(this.state.current.item)
    }

    return (
      <Fragment>
        <Header />
        <LibraryProvider
            handleCurrentPlay={this.handleCurrentPlay}
            current={current}
            audio={this.audio}
          >
          <Content/>
          <Player
            audio={this.audio}
            current={current}
          />
        </LibraryProvider>
      </Fragment>
    );
  }

  loadAudio = (item) => {
    this.audio.src = item.url;
    this.audio.load();

    if(this.state.play){
      this.audio.play();
    }
  }

}

export default App;
