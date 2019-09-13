import React, {Component, Fragment} from 'react';
import SwipeableViews from 'react-swipeable-views';
import Playlist from './Playlist';
import Library from './Library';
import Settings from './Settings';
import Menu from './Menu';

class Content extends Component{

  state = {
    indexView: 0,
    library: [],
    playlist: [],
    api_library: 'demo/library_demo.json',
  }

  componentDidMount(){
    this.loadLibraryApi()
  }

  loadLibraryApi(){
    let t = this
    let state = {}

    state.playlist = [1,4] // load playlist

    fetch(this.state.api_library)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        state.library = myJson

        if(state.playlist.length > 0){
          let item = state.library.filter((i) => (i.id === state.playlist[0] ) )
          t.props.handleCurrentPlay(item[0], 0)
        }
      })
      .then(function(){
        t.setState(state)
      })
  }

  handleChangeIndex = (indexView) => {
    this.setState( {indexView} )
  }

  handleAddToPlaylist = (item) => {
    let playlist = [...this.state.playlist, item.id]
    this.setState({playlist})
  }

  render(){
    let {current, handleCurrentPlay} = this.props
    let {playlist, library, indexView} = this.state

    return (
      <Fragment>
        <Menu
            changeView={this.handleChangeIndex}
            indexView={indexView}
        />
        <div id="main" className="container">
          <SwipeableViews index={indexView} onChangeIndex={this.handleChangeIndex}>
            <div className="pt-2 swipe-view-item">
              <Playlist playlist={playlist} library={library} playlistPos={current.position} handleCurrentPlay={handleCurrentPlay} />
            </div>
            <div className="pt-2 swipe-view-item">
              <Library library={library} currentId={playlist[current.position]} handleAddToPlaylist={this.handleAddToPlaylist} />
            </div>
            <div className="pt-2 swipe-view-item">
              <Settings />
            </div>
          </SwipeableViews>
        </div>
      </Fragment>
    );
  }

}

export default Content;
