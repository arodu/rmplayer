import React, {Component} from 'react';
import PlayItem from './PlayItem';

import {LibraryConsumer} from '../context/LibraryContext';

class Playlist extends Component{

  state = {}

  render(){
    return (
      <LibraryConsumer>
        {(value) => {
                if(value.playlist.length > 0){
                  let p = -1;
                  return (
                      <ul className="list-unstyled pl-1">
                        {
                          value.playlist.map( (id) => {
                            p++;
                            let item = value.library.filter( (i) => (id === i.id) )

                            let active = false
                            if(p === value.current.position){
                              active = true
                            }

                            return (
                              <PlayItem
                                key={p}
                                item={item[0]}
                                active={active}
                                position={p}
                                handleCurrentPlay={value.handleCurrentPlay}
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

        }}
      </LibraryConsumer>
    );
  }

}

export default Playlist;