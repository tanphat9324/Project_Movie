/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from "react";
import { withRouter } from 'react-router-dom';

import Slider from "react-slick";
import './SliderMovie.css';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

class CustomArrows extends Component {

  selectPhim = (maPhim) => {
    this.props.history.push(`/chitietphim/${maPhim}`)
  }

  render() {
    let { dsPhim } = this.props;
    const settings = {
      arrows: true,
      slidesPerRow: 4,
      rows: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <Fragment>
        <Slider {...settings}>
          {dsPhim.map((phim, index) => {
            return (
              <div key={index} className="col-3 movie_item">
                <div onClick={() => this.selectPhim(phim.maPhim)} className="linkMovie">
                  <div className="movie_item_thumbNail">
                    <img className='slider_image' src={phim.hinhAnh} />
                    <div className="movie_hover" />
                    <button className="movie_buy">MUA VÉ</button>
                  </div>
                  <p className="movie_title">
                    {phim.tenPhim}
                  </p>
                  <div className="movie_session">{phim.ngayKhoiChieu}</div>
                </div>
              </div>
            )
          })}
        </Slider>
      </Fragment>
    );
  }
}

export default withRouter(CustomArrows)