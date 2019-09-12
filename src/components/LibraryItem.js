import React, {Component} from 'react';
import {setTime} from '../Utils.js'

class PlayItem extends Component{
  state = {
    collapse: true
  }

  setCollapse = (collapse) => ( collapse ? 'collapse' : '' )

  handleCollapse = () => {
    let {collapse} = {...this.state}
    this.setState( {collapse: !collapse} )
  }

  render(){
    let {item, active, currentPlay} = this.props

    return (
      <li className="media border-bottom px-0 py-2">

        <button
            className = { `btn-pl-play btn btn-sm rounded-0 mr-2 ${ active ? 'btn-outline-success' : 'btn-success' }` }
            onClick = { ()=>{ currentPlay(item.id, true, false) } }
            disabled = { active }
          >
          <i className={ `fas fa-fw ${ active ? 'fa-play' : 'fa-play'}` }></i>
        </button>

        <div className="media-body">
          <div className="d-flex my-0">
            <div className="mr-auto title">
              <strong className="trak-name d-inline-block mr-1">{ item.title }</strong>
              <a href="#!" className="trak-artis d-inline-block small">{ item.artist }</a>
              <div className="status-info small text-muted"></div>
            </div>
            <div className="text-nowrap">
              <span className="badge badge-secondary">{ item.type.toUpperCase() }</span>
              &nbsp;
              <span className="badge badge-secondary">{ setTime(item.time) }</span>
              <a
                  href="#!"
                  className="btn-more ml-1 mr-0 collapsed"
                  onClick={ () => this.handleCollapse() }
                >
                <i className="fas fa-chevron-down fa-fw"></i>
              </a>
            </div>

          </div>
          <div className= { this.setCollapse(this.state.collapse) }  data-parent="#playlist">

          <div className="media">
            <div className="media-body">
              <ul className="list-unstyled small">
                <li>Album: <a href="#!">{ item.albun }</a></li>
                <li>Genre: <a href="#!">{ item.genre }</a></li>
                <li>Track: 1</li>
                <li>Year: { item.year }</li>
              </ul>
            </div>

            { /*<div className="cover align-self-end ml-2">
              <img src="https://upload.wikimedia.org/wikipedia/en/6/64/SystemofaDownToxicityalbumcover.jpg" alt="Toxicity - System of a Down - 2001" />
            </div>*/ }
          </div>

          <div className="text-right mt-2">
            <button className="btn btn-primary btn-sm rounded-0"><i className="fas fa-arrow-alt-circle-down fa-fw"></i><span className="d-none d-sm-inline"> Download</span></button>
            <button className="btn btn-primary btn-sm rounded-0"><i className="fas fa-edit fa-fw"></i><span className="d-none d-sm-inline"> Edit</span></button>
            <button className="btn btn-danger btn-sm rounded-0"><i className="fas fa-times fa-fw"></i><span className="d-none d-sm-inline"> Remove</span></button>
          </div>
          </div>
        </div>
      </li>
    );
  }

}


export default PlayItem;