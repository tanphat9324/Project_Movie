import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
import Carousel from '../../Carousel/Carousel';
import SelectMovie from '../../SelectMovie/SelectMovie';
import { layDanhSachPhim } from '../../../redux/actions/QuanLyPhimAction';
import Session from '../../Session/Session';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

class HomePage extends Component {
    componentDidMount(){
        this.props.layDanhSachPhim();
    }
    render() {
        return (
          <Fragment>
              <Header/>
              <Carousel/>
              <SelectMovie dsPhim={this.props.dsPhim}/>
            <Session/>
            <Footer/>
          </Fragment>
        )
    }
}

const mapStateToProps= state =>({
    dsPhim: state.QuanLyPhimReducer.dsPhim
})
const mapDispatchToProps= dispatch =>({
    layDanhSachPhim: () => dispatch(layDanhSachPhim())
})
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);