import React, { Component,Fragment } from 'react'
import style from './Session.module.css';
import {connect} from 'react-redux';
import {layDanhMucRap, layThongTinCumRap} from '../../redux/actions/QuanLyRapAction';
 class Session extends Component {
  componentDidMount(){
    this.props.layDanhMucRap();// div1
  }
  render() {
    console.log(this.props.danhMucRap);
    
    return (
      <Fragment>
       <section className={style.info}>
  <div className={style.info_header} />
  <div className={style.info_movie_item}>
    <div className={style.brand_movie}>
      <ul className={style.listCinema}>
      {this.props.danhMucRap.map((dMuc,index)=>{
        return(
          <li key={index}>
          <button onClick={()=>this.props.layThongTinCumRap(dMuc.maHeThongRap)}><img src={dMuc.logo} alt /></button>
        </li>
        )
      })}
      </ul>
    </div>
    <div className={style.brand_movie_item}>
      <ul className={style.listMovie}>
      {this.props.thongTinCumRap.map((cumRap,index) => {
        return(
          <li key={index}>
          <button>
            <div className="d-flex">
              <img src="./assets/images/r1.jpg" alt />
              <div className={style.movie_Info}>
                <div className="text-left">{cumRap.tenCumRap}</div>
                <div className="text-left">{cumRap.diaChi}</div>
                <div className="text-left">chi tiết</div>
              </div>
            </div>
          </button>
        </li>
        )
      })}

      
      </ul>
    </div>

    <div className={style.select_movie}>
      <div className={style.movieInfo}>
        <button>
          <div className="d-flex">
            <img src="./assets/images/r1.jpg" alt />
            <div className={style.movie_Info}>
              <div className="text-left">BHD Start -Bitexco</div>
              <div className="text-left">L3-Bitexco Icon 68, 2 Hải Triều, Q.1</div>
            </div>
          </div>
        </button>
        <div />
      </div>
      <div className={style.movieInfo}>
        <button>
          <div className="d-flex">
            <img src="./assets/images/r1.jpg" alt />
            <div className={style.movie_Info}>
              <div className="text-left">BHD Start -Bitexco</div>
              <div className="text-left">L3-Bitexco Icon 68, 2 Hải Triều, Q.1</div>
            </div>
          </div>
        </button>
        <div />
      </div>

    </div>
  </div>
  <div className="info_header" />
</section>

      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  danhMucRap: state.QuanLyRapReducer.dMucRap,
  thongTinCumRap: state.QuanLyRapReducer.cumRap
})

const mapDispatchToProps = dispatch =>{
  return{

    layDanhMucRap: () => dispatch(layDanhMucRap()),
    layThongTinCumRap: (cumRap) => dispatch(layThongTinCumRap(cumRap))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Session);