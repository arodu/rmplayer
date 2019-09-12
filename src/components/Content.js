import React, {Component, Fragment} from 'react';
import SwipeableViews from 'react-swipeable-views';
import Playlist from './Playlist';
import Library from './Library';
import Settings from './Settings';
import Menu from './Menu';

class Content extends Component{

  state = {
    indexView: 0
  }

  handleChangeIndex = indexView => {
    this.setState( {indexView} )
  }

  render(){
    let {playlist, library, currentPlay, playlistPos} = {...this.props}


    return (
      <Fragment>
        <Menu
            changeView={this.handleChangeIndex}
            index={this.state.indexView}
        />
        <div id="main" className="container">
          <SwipeableViews index={this.state.indexView} onChangeIndex={this.handleChangeIndex}>
            <div className="pt-2 swipe-view-item">
              <Playlist playlist={playlist} library={library} currentPlay={currentPlay} playlistPos={playlistPos} />
            </div>
            <div className="pt-2 swipe-view-item">
              <Library library={library} currentPlay={currentPlay} currentId={playlist[playlistPos]} />
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