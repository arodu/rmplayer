import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-md-none">
      <div className="container">
        <span className="d-block navbar-brand mr-auto"><i className="fas fa-play-circle fa-fw"></i> RMPlayer</span>
        <a href="https://github.com/arodu/rmplayer" className="nav-link text-dark pr-0 small" target="_blank" rel="noopener noreferrer">
          Fork me on <i className="fab fa-github fa-lg" alt="github.com" title="github.com"></i>
        </a>
      </div>
    </nav>
  );
}

export default Header;
