import React, {Component} from 'react';
import LibraryItem from './LibraryItem';
import {LibraryConsumer} from '../context/LibraryContext';

class Library extends Component{
  state={}

  render(){
    return (
      <LibraryConsumer>
        {(value) => {
          return (
            <ul className="list-unstyled pl-1">
              {
                value.library.map((item) => {
                  return (
                      <LibraryItem
                        key={item.id}
                        item={item}
                        handleAddToPlaylist={value.handleAddToPlaylist}
                      />
                  )
                })
              }
            </ul>
          );
        }}
      </LibraryConsumer>
    );
  }

}

export default Library;