import React, {Fragment, Component} from 'react';
import Header from './components/Header.js';
import Player from './components/Player.js';
import Content from './components/Content.js';


class App extends Component{

  state = {
    playlistPos: null,
    library: [],
    api_library: '/demo/library_demo.json',
    playlist: []
  }

  playlist = []

  constructor(props){
    super(props)
    this.audio = new Audio()
  }

  componentDidMount(){
    let t = this
    t.playlist = [1,4] // load playlist

    fetch(this.state.api_library)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        let state = {
          library: myJson,
        };

        if(t.playlist.length > 0){
          state.playlistPos = 0
        }

        t.setState(state)
      });
  }

  handleCurrentPlay = (id, addToPlaylist = false, play = true, position='last') => {
    let state = {}

    if(addToPlaylist){
      this.playlist = [...this.playlist, id ]
      state.playlist = this.playlist
    }

    if(play){
      if(position==='last'){
        state.playlistPos = (this.playlist.length - 1)
      }else{
        state.playlistPos = position
      }
    }

    this.setState(state)

  }

  handleChangePlay = (direction) => {
    let pos = this.state.playlistPos

    if(direction==='next' && (pos < this.state.playlist.length-1) ){
      pos++;
      this.setState({
        playlistPos: pos
      })
    }
    if(direction==='prev' && (pos > 0) ){
      pos--;
      this.setState({
        playlistPos: pos
      })
    }
  }

  render(){
    let {playlistPos, library} = this.state
    let playlist = this.playlist

    let item = library.filter((i) => (i.id === playlist[playlistPos]))

    return (
      <Fragment>
        <Header />
        <Content playlist={playlist} library={library} currentPlay={this.handleCurrentPlay} playlistPos={playlistPos} />
        <Player
            item = { item[0] }
            changePlay = { this.handleChangePlay }
            total = { playlist.length }
            playlistPos = { playlistPos }
            audio={ this.audio }
          />
      </Fragment>
    );
  }

}

export default App;
