import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import styles from './DetailMovie.module.css';

class DetailMovie extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className={styles.detailFilm}>
                    <div className={styles.dark}>
                        <div className={styles.overlay}></div>
                        <div className={styles.bgMain}>

                            <div className={styles.styleBlur}>
                                <img style={{borderRadius:'4px'}} src="./assets/images/bg_terminator.jpg" alt="" />
                            </div>
                            <div className={styles.styleGradient} style={{ background: 'linear-gradient(to top, rgb(10, 32, 41), transparent 100%)' }} />
                            <div className={styles.contentMain}>
                                <div className="row">
                                    <div className="col-md-3">
                                       <img src="./assets/images/m2.jpg" width='100%' alt=""/>
                                    </div>
                                    <div className="col-md-7" style={{display:'flex',alignItems:'center'}}>
                                        <div>

                                    <div>01.11.2019</div>
                                    <div>Kẻ Huỷ Diệt: Vận Mệnh Đen Tối - Terminator: Dark Fate</div>
                                    <div>128 phút - 6.6 IMDb - 2D/Digital</div>
                                    <button className='btn btn-danger'>
                                        Mua vé
                                    </button>
                                        </div>
                                    </div>
                                    <div className="col-md-4">

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={styles.lichChieu}>
                            
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default connect(null, null)(DetailMovie);