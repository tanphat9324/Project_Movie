import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
import styles from './LichChieuChiTiet.module.css';
import './Bs.css'
// import 'bootstrap/dist/css/bootstrap.css';

export default class LichChieuChiTiet extends Component {
    render() {
        return (
            <Fragment>
<div style={{display:'flex'}}>
  <div className={`${styles.branchMovie} nav flex-column nav-pills`} id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <a className= 'branchItem active nav-link' id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
        <img src="./assets/images/i1.png" width='50px' height='50px' alt=""/>
    </a>
    <a className='branchItem nav-link' id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
    <img src="./assets/images/i2.png" width='50px' height='50px' alt=""/>
    </a>
    <a className='branchItem nav-link' id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
    <img src="./assets/images/i3.png" width='50px' height='50px' alt=""/>

    </a>
    <a className='branchItem nav-link' id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
    <img src="./assets/images/i4.png" width='50px' height='50px' alt=""/>

    </a>
  </div>

  
  <div className={`${styles.content} tab-content`} id="v-pills-tabContent">
    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea incididunt minim occaecat.</div>
    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
  </div>
</div>


            </Fragment>
        )
    }
}
