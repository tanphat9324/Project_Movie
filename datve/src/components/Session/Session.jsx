/* eslint-disable jsx-a11y/alt-text */
import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
import {layDanhMucRap, layThongTinCumRap, layTTLichChieuHTRapAction} from '../../redux/actions/QuanLyRapAction';
import './Session.css';
import {NavLink} from 'react-router-dom'
import dayjs from 'dayjs'
import { layThongTinPhimAction } from '../../redux/actions/QuanLyPhimAction';

 class Session extends Component {
   constructor(props){
     super(props);
     this.state={
      danhSachPhim:[
        {
          lstLichChieuTheoPhim: [
            {
              "maLichChieu": 16639,
              "maRap": "477",
              "tenRap": "Rạp 7",
              "ngayChieuGioChieu": "2019-01-01T10:10:00",
              "giaVe": 75000.0
            },
          ],
          maPhim: 1324,
          tenPhim: "Ted 2"
        }
      ]
     }
   }
  componentDidMount(){
    this.props.layDanhMucRap();
    this.props.layTTLichChieuHTRap('BHDStar');
  }
  checkListIsEmpty(){
    if(typeof this.props.listCumRap !== 'undefined' && this.props.listCumRap.length > 0){
     return true;
    }else{
      return false;
    }
  }

  danhSachPhim = (danhSachPhim) =>{
    this.setState({
      danhSachPhim
    })    
  }

  layThongTinPhim = (maPhim) => {
    return this.props.thongTinPhim(maPhim);
  }
  render() {    
    console.log(this.state.danhSachPhim);
    
    return (
      <Fragment>
        <div style={{width:'50%',margin:'0 auto'}}>
        <img src="./assets/images/back-news.png" style={{width:'100%',maxHeight:'120px'}} alt=""/>
        </div>
        <div id='cumRap' style={{display:'flex',width:'50%',margin:'0 auto'}}>

  <div className="nav flex-column nav-pills customHomePage" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      {this.props.danhMucRap.map((dMuc,index)=>{
        return(
          <Fragment>
          <a onClick={()=>this.props.layTTLichChieuHTRap(dMuc.maHeThongRap)} key={index} className={index===0 ? 'branchItemSession nav-link active':'branchItemSession nav-link'} id="v-pills-home-tab" data-toggle="pill" href={`#${dMuc.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
          <img src={dMuc.logo} width='50px' height='50px' alt=""/>
                </a>
          <div className='hr'></div>
          </Fragment>
        )
    })}
  </div>

  <div style={{width:'90%'}} className="session_content tab-content" id="v-pills-tabContent">
  {this.checkListIsEmpty() ? <div className="tab-pane fade show active" id={this.props.listCumRap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
      {/* DIV 2 */}
        <div className='sessionSelect_movie'>
    {this.props.listCumRap.map((ttRap,index) => {
      // console.log('ttrap',ttRap);
      
        return(
          <div>
            <div key={index} className='movieInfo1'>
              <button onClick={()=>this.danhSachPhim(ttRap.danhSachPhim)} className='session_de'>
                <div className="session_de d-flex">
                  <img src="../assets/images/r1.jpg" />
                  <div className='movie_Info1'>
                    <div style={{fontWeight:'500',fontSize:'14px'}} className="text-left">{ttRap.tenCumRap}</div>
                    <div style={{fontSize:'14px',color:'#9b9b9b',textOverflow:'ellipsis'}} className="sessionDiaChi text-left">{ttRap.diaChi} </div>
                    <div className='text-left'><a style={{color:'red',textDecoration:'none',fontSize:'14px',textAlign:'left'}} href="#">[Bản đồ]</a> </div>
                  </div>
                </div>
              </button>
              <div />
            </div>
        {/* <div style={{padding:'0 0 0 20px',color:'black'}}>tên Phim: {danhSachPhim.tenPhim}</div> */}
        <div className='hr1'></div>
            </div>  
        )
      })}
 </div>

{/* Div3 */}
 <div className='session_Phim'>
 {/* <div className='session_movie'> */}
    {this.state.danhSachPhim.map((dsPhim,index) => {
      // console.log('ttRap',ttRap.danhSachPhim);
      
      // let danhSachPhim=ttRap.danhSachPhim[0];
      let list = dsPhim.lstLichChieuTheoPhim;
     this.props.thongTinPhim(dsPhim.maPhim);
     
        return(
          <div>
         <NavLink to={`/chitietphim/${dsPhim.maPhim}`}>
         <div key={index} className='movieInfo2'>
              <button className='session_de'>
                <div className="d-flex">
                  <img src={this.props.ttPhim.hinhAnh} />
                  <div className='movie_Info2'>
                    <div style={{fontWeight:'500',color:'#000'}} className="text-left">{dsPhim.tenPhim}</div>
                    <div style={{fontSize:'14px',color:'#FB4226'}} className="text-left">Đánh giá: {this.props.ttPhim.danhGia}</div>
                  </div>
                </div>
              </button>
              <div />
            </div>
         </NavLink>
            
        {/* <div style={{padding:'0 0 0 20px',color:'black'}}>tên Phim: {danhSachPhim.tenPhim}</div> */}
            <div style={{padding:'0 20px 20px 35px'}} className='bookingTicket1' >
              <div style={{paddingTop:'8px',paddingRight:'15px'}}>

              <img  src="../assets/images/2_0.png" width='30px' height='30px' alt=""/>
              </div>

              <div className='timeBooking1'>
                {list.slice(0,5).map((tt,index) => {
                  return(
                  <NavLink to={`/chitietdatve/${tt.maLichChieu}`} key={index} className='timeItem1' >{dayjs(tt.ngayKhoiChieu).format('HH:mm')}</NavLink>
                  )
                })}
              </div>
            </div>
            <div className='hr1'></div>
            </div>  
        )
      })}
 {/* </div> */}
 </div>

        </div> : <div></div> }
  </div>

</div>

<div style={{width:'50%',margin:'0 auto'}}>
        <img src="./assets/images/back-news.png" style={{width:'100%',maxHeight:'120px'}} alt=""/>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  danhMucRap: state.QuanLyRapReducer.dMucRap,
  listCumRap:state.QuanLyRapReducer.lstCumRap,
  thongTinCumRap: state.QuanLyRapReducer.cumRap,
  ttPhim: state.QuanLyPhimReducer.phimSua
})

const mapDispatchToProps = dispatch =>{
  return{

    layDanhMucRap: () => dispatch(layDanhMucRap()),
    layThongTinCumRap: (cumRap) => dispatch(layThongTinCumRap(cumRap)),
    layTTLichChieuHTRap: (maHTRap) => dispatch(layTTLichChieuHTRapAction(maHTRap)),
    thongTinPhim:(maPhim) => dispatch(layThongTinPhimAction(maPhim))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Session);