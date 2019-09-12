import React from 'react';
import LibraryItem from './LibraryItem';

function Library({library, currentPlay, currentId}) {

  /*<div className="alert alert-dark mx-1">
    <i className="fas fa-exclamation-triangle fa-fw"></i> Library is empty

    <button className="btn btn-dark btn-sm float-right rounded-0">
      Update Library
    </button>

    <div className="clearfix"></div>
  </div>*/

  return (
      <ul className="list-unstyled pl-1">
        {
          library.map((item) => {
            let active = false

            if(currentId!==undefined && currentId === item.id){
              active = true
            }

            return (
                <LibraryItem
                  key={item.id}
                  item={item}
                  active={active}
                  currentPlay={currentPlay}
                />
            )
          })
        }
      </ul>
  );
}

export default Library;