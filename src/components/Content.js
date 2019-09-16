import React, {Component, Fragment} from 'react';
import SwipeableViews from 'react-swipeable-views';
import Playlist from './Playlist';
import Library from './Library';
import Settings from './Settings';
import Menu from './Menu';

class Content extends Component{

  state = {
    indexView: 0,
  }

  handleChangeIndex = (indexView) => {
    this.setState( {indexView} )
  }

  render(){
    let {indexView} = this.state

    return (
      <Fragment>
        <Menu
            handleChangeIndex={this.handleChangeIndex}
            indexView={indexView}
        />
        <div id="main" className="container">
          <SwipeableViews index={indexView} onChangeIndex={this.handleChangeIndex}>
            <div className="pt-2 swipe-view-item">
              <Playlist/>
            </div>
            <div className="pt-2 swipe-view-item">
              <Library/>
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
