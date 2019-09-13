import React from 'react';
import PlayItem from './PlayItem';

function Playlist({playlist, library, playlistPos, handleCurrentPlay}) {
  if(playlist.length > 0){
    let p = -1;
    return (
        <ul className="list-unstyled pl-1">
          {
            playlist.map( (id) => {
              p++
              let item = library.filter( (i) => (id === i.id) )

              let active = false
              if(p === playlistPos){
                active = true
              }

              return (
                <PlayItem
                  key={p}
                  item={item[0]}
                  active={active}
                  position={p}
                  handleCurrentPlay={handleCurrentPlay}
                />
              )
            })
          }
        </ul>
    );
  }else{
    return (<div className="alert alert-dark mx-1">
      <i className="fas fa-exclamation-triangle fa-fw"></i> Playlist is empty
    </div>)
  }

}

export default Playlist;