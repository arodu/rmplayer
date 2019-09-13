import React, {Fragment, Component} from 'react';
import Header from './components/Header.js';
import Player from './components/Player.js';
import Content from './components/Content.js';


class App extends Component{

  state = {
    current: {
      item: null,
      position: null,
      first: true,
      last: true,
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
        first: true,
        last: true,
      },
      play: play,
    })
  }


  /*(id, addToPlaylist = false, play = true, position='last') => {
    let state = {}

    if(addToPlaylist){
      this.playlist = [...this.playlist, id ]
    }

    if(play){
      if(position==='last'){
        state.playlistPos = (this.playlist.length - 1)
      }else{
        state.playlistPos = position
      }
    }

    this.setState(state)

  } */

  //handleChangePlay = (direction) => {
  //  let pos = this.state.playlistPos

  //  if(direction==='next' && (pos < this.state.playlist.length-1) ){
  //    pos++;
  //    this.setState({
  //      playlistPos: pos
  //    })
  //  }
  //  if(direction==='prev' && (pos > 0) ){
  //    pos--;
  //    this.setState({
  //      playlistPos: pos
  //    })
  //  }
  //}

  render(){
    let {current} = this.state

    if(current.item !== null){
      this.loadAudio(this.state.current.item)
    }

    return (
      <Fragment>
        <Header />
        <Content
            current={current}
            handleCurrentPlay={this.handleCurrentPlay}
          />
        <Player
            current = {current}
            audio={this.audio}
            handlePlay={this.handlePlay}
          />
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
