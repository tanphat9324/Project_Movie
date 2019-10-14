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
         <Slider {...settings}>
                {dsPhim.map((phim,index)=>{
                  return(
                    <div key={index} className="movie_item">
                    <a href="#" classname="linkMovie">
                      <div className="movie_item_thumbNail">
                        <img src={phim.hinhAnh} alt />
                        <div className="movie_hover"></div>
                        <button className="btn movie_buy">MUA VÉ</button>
                      </div>
                      <div className="movie_title">
                        {phim.tenPhim}
                      </div>
                      <div className="movie_session">{phim.ngayKhoiChieu}</div>
                    </a>
                  </div>
                  )
                })}
              {/* <div className="movie_item">
              <a href="#" className="linkMovie">
                <div className="movie_item_thumbNail">
                  <img src="./assets/images/m1.jpg" alt />
                  <div className="movie_hover" />
                  <button className="btn movie_buy">MUA VÉ</button>
                </div>
                <div className="movie_title">
                  Nhân Duyên: Người Yêu Tiền Kiếp (C16)
                </div>
                <div className="movie_session">92 phút</div>
              </a>
            </div> */}

      </Slider>
      
      </Fragment>

       
    );
  }
}