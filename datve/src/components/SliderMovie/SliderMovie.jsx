import React, { Component,Fragment } from "react";
import Slider from "react-slick";
import './SliderMovie.css';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    console.log(this.props.dsPhim);
    let {dsPhim}= this.props;
    const settings = {
      // autoplay: true,
      arrows: true,
      slidesPerRow: 4,
      rows: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <Fragment>
         <Slider {...settings} className="custom_slider">
                {dsPhim.map((phim,index)=>{
                  return(
                    <div key={index} className="col-3 movie_item">
                    <a href="#" className="linkMovie">
                      <div className="movie_item_thumbNail">
                        <img src={phim.hinhAnh} />
                        <div className="movie_hover" />
                        <button className="btn movie_buy">MUA VÉ</button>
                      </div>
                      <p className="movie_title">
                        {phim.tenPhim}
                      </p>
                      <div className="movie_session">{phim.ngayKhoiChieu}</div>
                    </a>
                  </div>

                  )
                })}
      </Slider>
      </Fragment>
    );
  }
}