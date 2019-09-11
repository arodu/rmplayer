import React from 'react';

function Library() {
  return (
    <div className="mt-2 swipe-view-item">

      <div className="alert alert-dark mx-1">
        <i className="fas fa-exclamation-triangle fa-fw"></i> Library is empty

        <button className="btn btn-dark btn-sm float-right rounded-0">
          Update Library
        </button>

        <div className="clearfix"></div>
      </div>

    </div>
  );
}

export default Library;