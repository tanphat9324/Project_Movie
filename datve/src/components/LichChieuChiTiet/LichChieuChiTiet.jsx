/* eslint-disable jsx-a11y/alt-text */
import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
import styles from './LichChieuChiTiet.module.css';
import './customMDB.css';
import { layDanhMucRap, layTTLichChieuHTRapAction } from '../../redux/actions/QuanLyRapAction';
import dayjs from 'dayjs'
import {NavLink} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.css';
class LichChieuChiTiet extends Component {
  componentDidMount(){
    this.props.layDanhMucRap();
    this.props.layTTLichChieuHTRap('BHDStar')
  }
  checkListIsEmpty(){
    if(typeof this.props.listCumRap !== 'undefined' && this.props.listCumRap.length > 0){
     return true;
    }else{
      return false;
    }
  }
    render() {
        return (
            <Fragment>
<div id='lichChieuChiTiet' style={{display:'flex',borderRadius:'10px',Height:'713px'}}>
  <div className={`${styles.branchMovie} nav flex-column nav-pills`} id="v-pills-tab" role="tablist" aria-orientation="vertical">
    {this.props.danhMucRap.map((dMuc,index)=>{
      return(
        <a onClick={()=>this.props.layTTLichChieuHTRap(dMuc.maHeThongRap)} key={index} className={index===0 ? 'branchItem nav-link active':'branchItem nav-link'} id="v-pills-home-tab" data-toggle="pill" href={`#${dMuc.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
        <img style={{marginRight:'10px'}} src={dMuc.logo} width='50px' height='50px' alt=""/>
        {dMuc.tenHeThongRap}
    </a>
      )
    })}
  </div>

  <div className={`${styles.content} tab-content`} id="v-pills-tabContent">
  {this.checkListIsEmpty() ? <div className="tab-pane fade show active" id={this.props.listCumRap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
        <div className={styles.select_movie}>
    {this.props.listCumRap.map((ttRap,index) => {
      console.log('ttRap',ttRap);
      
      let danhSachPhim=ttRap.danhSachPhim[0];
      let list = danhSachPhim.lstLichChieuTheoPhim;
      
        return(
          <div>
            <div key={index} className={styles.movieInfo}>
              <button>
                <div className="d-flex">
                  <img src="../assets/images/r1.jpg" />
                  <div className={styles.movie_Info}>
                    <div style={{fontWeight:'500'}} className="text-left">{ttRap.tenCumRap}</div>
                    <div style={{fontSize:'14px',color:'#9b9b9b'}} className="text-left">{ttRap.diaChi} <a style={{color:'red',textDecoration:'none',fontSize:'14px'}} href="#">[Bản đồ]</a> </div>
                  </div>
                </div>
              </button>
              <div />
            </div>
        
        

        <div className={styles.tenPhim}>Phim: {danhSachPhim.tenPhim}</div>
            <div style={{padding:'0 20px 20px 35px'}} className={styles.bookingTicket} >
              <div style={{paddingTop:'8px',paddingRight:'15px'}}>

              <img  src="../assets/images/2_0.png" width='30px' height='30px' alt=""/>
              </div>

              <div className={styles.timeBooking}>
                {list.slice(0,16).map((tt,index) => {
                  return(
                  <NavLink to={`/chitietdatve/${tt.maLichChieu}`} key={index} className={styles.timeItem} >{dayjs(tt.ngayKhoiChieu).format('HH:mm')}</NavLink>
                  )
                })}
              </div>
            </div>
            <hr className={styles.hr}/>
            </div>  
        )
      })}
 </div>
        </div> : <div></div> }
  </div>
  </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
  danhMucRap: state.QuanLyRapReducer.dMucRap,
  thongTinRap: state.QuanLyRapReducer.LichChieuHeThongRap,
  listCumRap:state.QuanLyRapReducer.lstCumRap
})

const mapDispatchToProps = dispatch =>{
  return{
    layDanhMucRap: () => dispatch(layDanhMucRap()),
    layTTLichChieuHTRap: (maHTRap) => dispatch(layTTLichChieuHTRapAction(maHTRap))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LichChieuChiTiet);