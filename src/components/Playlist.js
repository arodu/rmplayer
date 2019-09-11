import React from 'react';
import PlayItem from './PlayItem';

function Playlist() {
  return (
    <div className="mt-2 swipe-view-item">

      <div className="alert alert-dark mx-1">
        <i className="fas fa-exclamation-triangle fa-fw"></i> Playlist is empty
      </div>

      <ul className="list-unstyled pl-1">
        <PlayItem key="1"/>
        <PlayItem key="2"/>
        <PlayItem key="3"/>
        <PlayItem key="4"/>
        <PlayItem key="5"/>
      </ul>

    </div>
  );
}

export default Playlist;