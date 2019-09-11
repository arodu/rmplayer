import React, {Fragment, Component} from 'react';
import SwipeableViews from 'react-swipeable-views';

import Header from './components/Header.js';
import Player from './components/Player.js';
import Playlist from './components/Playlist';
import Library from './components/Library';
import Settings from './components/Settings';
import Menu from './components/Menu';


class App extends Component{

  state = {
    indexView: 0,
    current_play: null,
    playlist: [],
    Library: []
  }

  componentDidMount(){
    //document.title = "dfsdfadqwdqwddsdfsd"
  }

  handleChangeIndex = indexView => {
    this.setState( {indexView} )
  }

  render(){
    return (
      <Fragment>
        <Header />
        <Menu
            changeView={this.handleChangeIndex}
            index={this.state.indexView}
        />
        <div id="main" className="container">
          <SwipeableViews index={this.state.indexView} onChangeIndex={this.handleChangeIndex}>
            <Playlist />
            <Library />
            <Settings />
          </SwipeableViews>
        </div>
        <Player />
      </Fragment>
    );
  }

}

export default App;
