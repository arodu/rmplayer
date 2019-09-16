import React, {Component} from 'react';

const LibraryContext = React.createContext();
export const LibraryConsumer = LibraryContext.Consumer;

class LibraryProvider extends Component{

  state = {
    library: [],
    playlist: [],
    inPosition: {first: true, last: true},
    api_library: 'demo/library_demo.json',
  }

  componentDidMount(){
    this.loadLibraryApi()
  }

  async loadLibraryApi(){
    let t = this
    let state = {}
    let pos = null

    try{
      let response = await fetch(this.state.api_library)
      state.library = await response.json()
      state.playlist = [1,2,3,4,5,6] // load playlist
      let item = state.library.filter((i) => (i.id === state.playlist[0] ) )
      pos = 0
      t.props.handleCurrentPlay(item[0], pos, false)

      t.setState(state)
      t.handleInPosition(pos)
    }catch(e){
      console.log(e)
    }

  }

  handleAddToPlaylist = (item) => {
    let playlist = [...this.state.playlist, item.id]
    this.setState({playlist})
  }

  handleChangePlay = (current, direction) => {
    let pos = current.position
    let {library, playlist} = this.state
    let {handleCurrentPlay} = this.props

    if(direction==='next' && (pos < this.state.playlist.length-1) ){
      let nextId = playlist[pos+1]
      let item = library.filter((i) => (i.id === nextId) )
      handleCurrentPlay(item[0], pos+1, true)
      this.handleInPosition(pos+1)
    }

    if(direction==='prev' && (pos > 0) ){
      let nextId = playlist[pos-1]
      let item = library.filter((i) => (i.id === nextId) )
      handleCurrentPlay(item[0], pos-1, true)
      this.handleInPosition(pos-1)
    }
  }

  handleInPosition(position){
    if(position != null){
      let {playlist} = this.state
      let inPosition = {first: true, last: true};

      if(position > 0){
        inPosition.first = false;
      }
      if(position < (playlist.length-1)){
        inPosition.last = false;
      }

      this.setState({inPosition})
    }
  }

  render(){
    let {handleCurrentPlay, current, audio} = this.props

    return (
      <LibraryContext.Provider
          value = {{
            library: this.state.library,
            playlist: this.state.playlist,
            handleAddToPlaylist: this.handleAddToPlaylist,
            handleCurrentPlay: handleCurrentPlay,
            handleChangePlay: this.handleChangePlay,
            current: current,
            audio: audio,
            inPosition: this.state.inPosition,
          }}
        >
        {this.props.children}
      </LibraryContext.Provider>
    );
  }


}

export default LibraryProvider;