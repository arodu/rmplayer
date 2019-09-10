import React, {Fragment} from 'react';

function Header() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-md-none">
        <div className="container">
          <span className="d-block navbar-brand mr-auto"><i className="fas fa-play-circle fa-fw"></i> RMPlayer</span>
          <a href="https://github.com/arodu/rmplayer" className="nav-link text-dark pr-0 small" target="_blank" rel="noopener noreferrer">
            Fork me on <i className="fab fa-github fa-lg" alt="github.com" title="github.com"></i>
          </a>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-custom">
        <div className="container d-flex justify-content-md-end">
          <span className="navbar-brand d-none d-md-inline-block mr-auto"><i className="fas fa-play-circle fa-fw"></i> RMPlayer</span>
          <a href="https://github.com/arodu/rmplayer" className="nav-link text-light d-none d-md-inline-block small" >
            Fork me on <i className="fab fa-github fa-lg" alt="github.com" title="github.com"></i>
          </a>
          <div id="main-menu" className="d-flex w-100 w-md-auto">
            <button id="btn-playlist" data-target="#content" data-slide-to="0" className="active btn-carousel flex-fill mr-2 btn btn-sm btn-outline-light rounded-0">
              <i className="fas fa-list fa-fw"></i><span>  Playlist</span>
            </button>
            <button id="btn-libray" data-target="#content" data-slide-to="1" className="btn-carousel flex-fill mr-2 btn btn-sm btn-outline-light rounded-0">
              <i className="fas fa-music fa-fw"></i><span>  Library</span>
            </button>
            <button id="btn-config" data-target="#content" data-slide-to="2" className="btn-carousel flex-fill mr-2 btn btn-sm btn-outline-light rounded-0">
              <i className="fas fa-sliders-h fa-fw"></i><span> Setting</span>
            </button>
            <button id="btn-search" className="mr-0 btn btn-sm btn-outline-light rounded-0">
              <i className="fas fa-search fa-fw"></i>
            </button>

            <div id="search" className="input-group flex-fill input-group-sm d-none">
              <div className="input-group-prepend">
                <button className="btn btn-outline-light rounded-0" type="button" id="btn-search-back">
                  <i className="fas fa-arrow-left fa-fw"></i>
                </button>
              </div>
              <input type="search" className="form-control rounded-0 border-0" placeholder="Search..." />
            </div>

          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Header;
