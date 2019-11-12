/* eslint-disable jsx-a11y/alt-text */
import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
import {layDanhMucRap, layThongTinCumRap} from '../../redux/actions/QuanLyRapAction';
import './Session.css';
 class Session extends Component {
  componentDidMount(){
    this.props.layDanhMucRap();// div1
  }
  render() {
    console.log(this.props.danhMucRap);
    
    return (
      <Fragment>
        <div style={{display:'flex',width:'50%',margin:'0 auto'}}>
  <div className="nav flex-column nav-pills customHomePage" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
    <img src="./assets/images/i1.png" width='50px' height='50px' alt=""/>
    </a>
    <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
    <img  src="./assets/images/i1.png" width='50px' height='50px' alt=""/>
    </a>
    <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
    <img  src="./assets/images/i1.png" width='50px' height='50px' alt=""/>

    </a>
    <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
    <img src="./assets/images/i1.png" width='50px' height='50px' alt=""/>

    </a>
  </div>
  <div style={{width:'90%'}} className="tab-content" id="v-pills-tabContent">
    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
  </div>
</div>

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