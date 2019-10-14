import React, { Component,Fragment } from 'react'
import SliderMovie from '../SliderMovie/SliderMovie';
import './SelectMovie.css';
export default class SelectMovie extends Component {
  render() {
    let {dsPhim}=this.props;
    return (
      <Fragment>
      <div className="list_movie">
        <ul className="nav nav-pills mb-3 custom_session" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a className="nav-link session_nav active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab">Đang Chiếu</a>
          </li>
          <li className="nav-item">
            <a className="nav-link session_nav" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab">Sắp Chiếu</a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <SliderMovie dsPhim={dsPhim}/>
          </div>
          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
          <SliderMovie dsPhim={dsPhim}/>
          </div>
        </div>
        </div>

      </Fragment>
     
    )
  }
}
