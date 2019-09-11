import React, {Component} from 'react';

class Menu extends Component{

  state = {
    searchView: false,
  }

  handerSearchView = () => {
    let {searchView} = {...this.state}

    this.setState({searchView: !searchView})
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-custom">
        <div className="container d-flex justify-content-md-end">
          <span className="navbar-brand d-none d-md-inline-block mr-auto"><i className="fas fa-play-circle fa-fw"></i> RMPlayer</span>

          <a href="https://github.com/arodu/rmplayer" className="nav-link text-light d-none d-md-inline-block small" target="_blank" rel="noopener noreferrer">
            Fork me on <i className="fab fa-github fa-lg" alt="github.com" title="github.com"></i>
          </a>

          <div className="d-flex w-100 w-md-auto">

            <div className={ `w-100 ${ this.state.searchView ? 'd-none' : 'd-flex' }` }>
              <button id="btn-playlist"
                className={`flex-fill mr-1 btn btn-sm btn-outline-light rounded-0 ${this.props.index === 0 ? 'active': ''}`}
                onClick={ ()=>this.props.changeView(0) }
              >
                <i className="fas fa-list fa-fw"></i><span> Playlist</span>
              </button>
              <button id="btn-libray"
                className={`flex-fill mr-1 btn btn-sm btn-outline-light rounded-0 ${this.props.index === 1 ? 'active': ''}`}
                onClick={ ()=>this.props.changeView(1) }
              >
                <i className="fas fa-music fa-fw"></i><span>  Library</span>
              </button>
              <button id="btn-config"
                className={`flex-fill mr-1 btn btn-sm btn-outline-light rounded-0 ${this.props.index === 2 ? 'active': ''}`}
                onClick={ ()=>this.props.changeView(2) }
              >
                <i className="fas fa-sliders-h fa-fw"></i><span> Setting</span>
              </button>

              <button id="btn-search" className="mr-0 btn btn-sm btn-outline-light rounded-0"
                  onClick={this.handerSearchView}
                >
                <i className="fas fa-search fa-fw"></i>
              </button>
            </div>

            <div id="search" className={ `input-group flex-fill input-group-sm ${  this.state.searchView ? '' : 'd-none' }`  }>
              <input type="search" className="form-control rounded-0 border-0" placeholder="Search..." />
              <div className="input-group-prepend">
                <button className="btn btn-outline-light rounded-0" type="button"
                    onClick={this.handerSearchView}
                  >
                  <i className="fas fa-arrow-left fa-fw"></i>
                </button>
              </div>
            </div>

          </div>
        </div>
      </nav>
    );
  }

}

export default Menu;