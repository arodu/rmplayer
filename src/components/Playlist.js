import React from 'react';

function Playlist() {
  return (
    <div id="playlist" className="carousel-item active pt-2 accordion" data-btn="#btn-playlist">

      <div className="alert alert-dark mx-4">
        <i className="fas fa-exclamation-triangle fa-fw"></i> Playlist is empty
      </div>

      <ul className="list-unstyled pl-1">

        <li className="media border-bottom px-0 py-2">
          <button className="btn-pl-play btn btn-primary btn-sm rounded-0 mr-2">
            <i className="fas fa-play fa-fw"></i>
          </button>
          <div className="media-body">
            <div className="d-flex my-0">
              <div className="mr-auto title">
                <strong className="trak-name d-inline-block mr-1">Toxiciy</strong>
                <a href="#" className="trak-artis d-inline-block small">System of a Down</a>
                <div className="status-info small text-muted"></div>
              </div>
              <div className="text-nowrap">
                <span className="badge badge-secondary">MP3</span>
                <span className="badge badge-secondary">00:00</span>
                <a className="btn-more ml-1 mr-0 collapsed" data-toggle="collapse" href="#collapseList1">
                  <i className="fas fa-chevron-up fa-fw"></i>
                </a>
              </div>

            </div>
            <div id="collapseList1" className="collapse" data-parent="#playlist">

            <div className="media">
              <div className="media-body">
                <ul className="list-unstyled small">
                  <li>Album: <a href="#">Toxicity</a></li>
                  <li>Genre: <a href="#">Heavy metal</a></li>
                  <li>Track: 2</li>
                  <li>Year: 2001</li>
                </ul>
              </div>

              <div className="cover align-self-end ml-2">
              <img src="https://upload.wikimedia.org/wikipedia/en/6/64/SystemofaDownToxicityalbumcover.jpg" alt="Toxicity - System of a Down - 2001" />
              </div>
            </div>

            <div className="text-right mt-2">
              <button className="btn btn-primary btn-sm rounded-0"><i className="fas fa-arrow-alt-circle-down fa-fw"></i><span className="d-none d-sm-inline"> Download</span></button>
              <button className="btn btn-primary btn-sm rounded-0"><i className="fas fa-edit fa-fw"></i><span className="d-none d-sm-inline"> Edit</span></button>
              <button className="btn btn-danger btn-sm rounded-0"><i className="fas fa-times fa-fw"></i><span className="d-none d-sm-inline"> Remove</span></button>
            </div>
            </div>
          </div>
        </li>

        <li className="media border-bottom px-0 py-2">
          <button className="btn-pl-play btn btn-primary btn-sm rounded-0 mr-2">
            <i className="fas fa-play fa-fw"></i>
          </button>
          <div className="media-body">
            <div className="d-flex my-0">
              <div className="mr-auto title">
                <strong className="trak-name d-inline-block mr-1">Toxiciy</strong>
                <a href="#" className="trak-artis d-inline-block small">System of a Down</a>
                <div className="status-info small text-muted"></div>
              </div>
              <div className="text-nowrap">
                <span className="badge badge-secondary">MP3</span>
                <span className="badge badge-secondary">00:00</span>
                <a className="btn-more ml-1 mr-0 collapsed" data-toggle="collapse" href="#collapseList1">
                  <i className="fas fa-chevron-up fa-fw"></i>
                </a>
              </div>


            </div>
            <div id="collapseList1" className="collapse" data-parent="#playlist">

            <div className="media">
              <div className="media-body">
                <ul className="list-unstyled small">
                  <li>Album: <a href="#">Toxicity</a></li>
                  <li>Genre: <a href="#">Heavy metal</a></li>
                  <li>Track: 2</li>
                  <li>Year: 2001</li>
                </ul>
              </div>

              <div className="cover align-self-end ml-2">
              <img src="https://upload.wikimedia.org/wikipedia/en/6/64/SystemofaDownToxicityalbumcover.jpg" alt="Toxicity - System of a Down - 2001" />
              </div>
            </div>

            <div className="text-right mt-2">
              <button className="btn btn-primary btn-sm rounded-0"><i className="fas fa-arrow-alt-circle-down fa-fw"></i><span className="d-none d-sm-inline"> Download</span></button>
              <button className="btn btn-primary btn-sm rounded-0"><i className="fas fa-edit fa-fw"></i><span className="d-none d-sm-inline"> Edit</span></button>
              <button className="btn btn-danger btn-sm rounded-0"><i className="fas fa-times fa-fw"></i><span className="d-none d-sm-inline"> Remove</span></button>
            </div>
            </div>
          </div>
        </li>

        <li className="media border-bottom px-0 py-2">
          <button className="btn-pl-play btn btn-primary btn-sm rounded-0 mr-2">
            <i className="fas fa-play fa-fw"></i>
          </button>
          <div className="media-body">
            <div className="d-flex my-0">
              <div className="mr-auto title">
                <strong className="trak-name d-inline-block mr-1">Toxiciy</strong>
                <a href="#" className="trak-artis d-inline-block small">System of a Down</a>
                <div className="status-info small text-muted"></div>
              </div>
              <div className="text-nowrap">
                <span className="badge badge-secondary">MP3</span>
                <span className="badge badge-secondary">00:00</span>
                <a className="btn-more ml-1 mr-0 collapsed" data-toggle="collapse" href="#collapseList1">
                  <i className="fas fa-chevron-up fa-fw"></i>
                </a>
              </div>


            </div>
            <div id="collapseList1" className="collapse" data-parent="#playlist">

            <div className="media">
              <div className="media-body">
                <ul className="list-unstyled small">
                  <li>Album: <a href="#">Toxicity</a></li>
                  <li>Genre: <a href="#">Heavy metal</a></li>
                  <li>Track: 2</li>
                  <li>Year: 2001</li>
                </ul>
              </div>

              <div className="cover align-self-end ml-2">
              <img src="https://upload.wikimedia.org/wikipedia/en/6/64/SystemofaDownToxicityalbumcover.jpg" alt="Toxicity - System of a Down - 2001" />
              </div>
            </div>

            <div className="text-right mt-2">
              <button className="btn btn-primary btn-sm rounded-0"><i className="fas fa-arrow-alt-circle-down fa-fw"></i><span className="d-none d-sm-inline"> Download</span></button>
              <button className="btn btn-primary btn-sm rounded-0"><i className="fas fa-edit fa-fw"></i><span className="d-none d-sm-inline"> Edit</span></button>
              <button className="btn btn-danger btn-sm rounded-0"><i className="fas fa-times fa-fw"></i><span className="d-none d-sm-inline"> Remove</span></button>
            </div>
            </div>
          </div>
        </li>

      </ul>


    </div>
  );
}

export default Playlist;