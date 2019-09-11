import React, {Component} from 'react';


class Player extends Component{

  state = {
    current_time: 0,
    current_play: {
      id: null,
      total_time: 0,
      title: "",
    },
    repeat: false,
    random: false,
  }

  setTime = (time) => {
    let minutes = Math.floor(time / 60)
    let seconds = time - (minutes * 60)

    minutes = (minutes < 10) ? `0${minutes}` : `${minutes}`
    seconds = (seconds < 10) ? `0${seconds}` : `${seconds}`
    return `${minutes}:${seconds}`
  }

  render(){
    return (
      <div id="player" className="bg-custom fixed-bottom text-light py-1 disabled">
        <div className="container position-relative">
          <div className="primary-controls">
            <button id="btn-play" className="btn btn-outline-light border-0 rounded-0"><i className="fas fa-play fa-3x"></i></button>
            <button id="btn-loader" className="d-none btn btn-outline-light border-0 rounded-0 " disabled><i className="fas fa-spinner fa-pulse fa-3x"></i></button>
            <button id="btn-pause" className="d-none btn btn-outline-light border-0 rounded-0"><i className="fas fa-pause fa-3x"></i></button>
          </div>
          <div className="secondary-controls row">
              <div className="col-12 order-md-1 mb-2 pl-1">
                <a id="btn-info" className="text-light float-right ml-1" data-toggle="collapse" href="#collapseList1">
                  <i className="fas fa-info-circle"></i>
                </a>
                <div id="player-title" className="title text-truncate">RMPlayer</div>
              </div>
              <div className="timer-controls col-12 col-md-8 d-flex order-md-3 mb-1 pl-1">
                <div className="flex-grow-1">

                  <div id="timer">
                    <input type="range" className="form-control-range custom-range" value="0" readOnly />
                  </div>

                </div>
                <div className="ml-2 time text-nowrap">
                  <span id="current-time">{ this.setTime(this.state.current_time) }</span> / <span id="total-time">{ this.setTime(this.state.current_play.total_time) }</span>
                </div>
              </div>
              <div className="d-flex col-12 col-md-4 order-md-2 mb-1 pl-1">
                  <button id="btn-prev" className="flex-fill mr-1 btn btn-outline-light border-0 rounded-0 btn-sm"><i className="fas fa-fast-backward fa-fw"></i></button>
                  <button id="btn-stop" className="flex-fill mr-1 btn btn-outline-light border-0 rounded-0 btn-sm"><i className="fas fa-stop fa-fw"></i></button>
                  <button id="btn-next" className="flex-fill mr-1 btn btn-outline-light border-0 rounded-0 btn-sm"><i className="fas fa-fast-forward fa-fw"></i></button>

                  <button id="btn-volume" data-toggle="modal" data-target="#volumeModal" className="flex-fill mr-1 btn btn-outline-light border-0 rounded-0 btn-sm">
                    <i className="fas fa-volume-up fa-fw icon-volume"></i>
                  </button>

                  <div className="btn-group dropup flex-fill mr-1 ">
                    <button id="btn-options" type="button" className="btn btn-outline-light border-0 rounded-0 btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
        <div className="overload"></div>
      </div>
    );
  }

}

export default Player;
