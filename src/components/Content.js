import React from 'react';
import Playlist from './Playlist';
import Library from './Library';
import Settings from './Settings';

function Content() {
  return (
    <div id="main" className="container">
      <div id="content" className="carousel slide" data-ride="carousel" data-interval="false">
        <div className="carousel-inner">
          <Playlist />
          <Library />
          <Settings />
        </div>
      </div>
    </div>
  );
}

export default Content;
