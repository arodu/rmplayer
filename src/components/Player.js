import React, {Component} from 'react';
import {setTime} from '../Utils.js'

class Player extends Component{

  state = {
    total_time: 0,
    title: "RMPlayer",
    id: null,
    active: false,
    status: 'play',
  }

  constructor(props){
    super(props)
    this.audio = props.audio
    this.range = React.createRef();
    this.timer = React.createRef();
    this.rangeMove = true
  }

  componentDidUpdate(prevProps, prevState){
    let t = this
    let item = t.props.current.item

    t.audio.onloadedmetadata = function() {
      t.setState({
        title: item.title,
        id: item.id,
        total_time: t.audio.duration,
        active:true,
      })
    };

    t.audio.ontimeupdate = function() {
      if(t.rangeMove===true){
        t.range.current.value = t.audio.currentTime
      }
      t.timer.current.innerHTML = setTime(t.audio.currentTime)
    }

    t.audio.onplaying = function() {
      t.setState({
        status: 'pause',
      })
    }

    t.audio.onplay = function() {
    }

    t.audio.onpause = function() {
      t.setState({
        status: 'play',
      })
    }

    t.audio.onwaiting = function() {
      t.setState({
        status: 'loader',
      })
    }
  }

  handleStop = () => {
    this.audio.pause()
    this.audio.currentTime = 0
  }

  hangleChangeTime = () => {
    this.audio.currentTime = this.range.current.value
    this.rangeMove = true
  }

  /*
  UNSAFE_componentWillReceiveProps({item}) {
    if(item != null){
      this.loadAudio(item)
    }
  }
  */

  mainButton = () => {
    let t = this
    if(this.state.status === 'play'){
        return (
          <button id="btn-play" className="btn btn-outline-light border-0 rounded-0"
            onClick={ () => t.audio.play() }
          >
            <i className="fas fa-play fa-3x"></i>
          </button>
        )

      }else if(this.state.status === 'pause'){
        return (
          <button id="btn-pause" className="btn btn-outline-light border-0 rounded-0"
            onClick={ () => t.audio.pause() }
          >
            <i className="fas fa-pause fa-3x"></i>
          </button>
        )

      }else{
        return (<button id="btn-loader" className="btn btn-outline-light border-0 rounded-0 " disabled><i className="fas fa-spinner fa-pulse fa-3x"></i></button>)

      }
  }

  render(){
    let {current} = this.props

    return (
      <div id="player" className={ `bg-custom fixed-bottom text-light py-1 ${ this.state.active ? '' : 'disabled' }` }>
        <div className="container position-relative">
          <div className="primary-controls">
            {this.mainButton()}
          </div>
          <div className="secondary-controls row">
              <div className="col-12 order-md-1 mb-2 pl-1">
                <a id="btn-info" className="text-light float-right ml-1 disabled" data-toggle="collapse" href="#collapseList1">
                  <i className="fas fa-info-circle"></i>
                </a>
                <div id="player-title" className="title text-truncate">{ this.state.title }</div>
              </div>
              <div className="timer-controls col-12 col-md-8 d-flex order-md-3 mb-1 pl-1">
                <div className="flex-grow-1">

                  <div id="timer">
                    <input
                        type="range"
                        className="form-control-range custom-range"
                        ref={this.range}
                        min={0}
                        max={this.state.total_time}
                        onMouseOut={this.hangleChangeTime}
                        onMouseDown={() => {this.rangeMove = false} }
                    />
                  </div>

                </div>
                <div className="ml-2 time text-nowrap">
                  <span id="current-time" ref={this.timer}>{ setTime(0) }</span> / <span id="total-time">{ setTime(this.state.total_time) }</span>
                </div>
              </div>
              <div className="d-flex col-12 col-md-4 order-md-2 mb-1 pl-1">
                  <button
                      disabled={ current.first ? true : false }
                      className="flex-fill mr-1 btn btn-outline-light border-0 rounded-0 btn-sm"
                      onClick={() => {
                        //changePlay('prev')
                      }}
                    >
                    <i className="fas fa-fast-backward fa-fw"></i>
                  </button>

                  <button
                      className="flex-fill mr-1 btn btn-outline-light border-0 rounded-0 btn-sm"
                      onClick={this.handleStop}
                    >
                    <i className="fas fa-stop fa-fw"></i>
                  </button>

                  <button
                      disabled={ current.last ? true : false }
                      className="flex-fill mr-1 btn btn-outline-light border-0 rounded-0 btn-sm"
                      onClick={() => {
                        //changePlay('next')
                      }}
                    >
                    <i className="fas fa-fast-forward fa-fw"></i>
                  </button>

                  <button disabled id="btn-volume" data-toggle="modal" data-target="#volumeModal" className="flex-fill mr-1 btn btn-outline-light border-0 rounded-0 btn-sm">
                    <i className="fas fa-volume-up fa-fw icon-volume"></i>
                  </button>

                  <div className="btn-group dropup flex-fill mr-1 ">
                    <button disabled id="btn-options" type="button" className="btn btn-outline-light border-0 rounded-0 btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-random fa-fw"></i>
                    </button>

                    <div className="dropdown-menu">
                      <h6 className="dropdown-header"><i className="fas fa-redo-alt fa-fw"></i> Repeat</h6>
                      <div className="dropdown-item">
                        <div className="custom-control custom-radio">
                          <input type="radio" id="dont-repeat" name="repeat" value="none" className="custom-control-input" checked={true} readOnly />
                          <label className="custom-control-label" htmlFor="dont-repeat">Don't repeat</label>
                        </div>
                      </div>
                      <div className="dropdown-item">
                        <div className="custom-control custom-radio">
                          <input type="radio" id="repeat-playlist" name="repeat" value="playlist" className="custom-control-input" readOnly />
                          <label className="custom-control-label" htmlFor="repeat-playlist">Repeat Playlist</label>
                        </div>
                      </div>

                      <div className="dropdown-divider"></div>

                      <h6 className="dropdown-header"><i className="fas fa-random fa-fw"></i> Random</h6>
                      <div className="dropdown-item">
                        <div className="custom-control custom-radio">
                          <input type="radio" id="dont-random" name="random" value="none" className="custom-control-input" checked={true} readOnly />
                          <label className="custom-control-label" htmlFor="dont-random">Don't random</label>
                        </div>
                      </div>
                      <div className="dropdown-item">
                        <div className="custom-control custom-radio">
                          <input type="radio" id="random-playlist" name="random" value="playlist" className="custom-control-input" />
                          <label className="custom-control-label" htmlFor="random-playlist">Random playlist</label>
                        </div>
                      </div>

                    </div>
                  </div>

              </div>
          </div>
        </div>
        <div className={ `overload ${ this.state.active ? 'd-none' : '' }`}></div>
      </div>
    );
  }


}

export default Player;
