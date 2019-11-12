/* eslint-disable jsx-a11y/alt-text */
import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
import styles from './LichChieuChiTiet.module.css';
import './customMDB.css';
import { layDanhMucRap, layTTLichChieuHTRapAction } from '../../redux/actions/QuanLyRapAction';

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
      console.log(this.props.listCumRap);
      
        return (
            <Fragment>
<div style={{display:'flex',borderRadius:'10px',Height:'713px'}}>
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

  {/* <div className='tabPanel'> */}
  <div className={`${styles.content} tab-content`} id="v-pills-tabContent">
  {this.checkListIsEmpty() ? <div className="tab-pane fade show active" id={this.props.listCumRap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
        <div className={styles.select_movie}>
    {this.props.listCumRap.map((ttRap,index) => {
        return(
          <div>
            <div key={index} className={styles.movieInfo}>
              <button>
                <div className="d-flex">
                  <img src="./assets/images/r1.jpg" />
                  <div className={styles.movie_Info}>
                    <div className="text-left">{ttRap.tenCumRap}</div>
                    <div className="text-left">{ttRap.diaChi}</div>
                  </div>
                </div>
              </button>
              <div />
            </div>
      
            <hr className={styles.hr}/>
            </div>  
        )
      })}
 </div>
        </div> : <div></div> }
    {/* <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
   
    </div>
    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div> */}
  </div>
  </div>
{/* </div> */}


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