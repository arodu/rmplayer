import React from 'react';

function Library() {
  return (
    <div data-btn="#btn-libray" className="carousel-item pt-2 accordion">

      <div className="alert alert-dark mx-4">
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