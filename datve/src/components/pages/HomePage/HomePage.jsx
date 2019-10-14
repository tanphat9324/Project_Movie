import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
import Carousel from '../../Carousel/Carousel';
import SelectMovie from '../../SelectMovie/SelectMovie';
import { layDanhSachPhim } from '../../../redux/actions/QuanLyPhimAction';

class HomePage extends Component {
    componentDidMount(){
        this.props.layDanhSachPhim();
    }
    render() {
        return (
          <Fragment>
              <Carousel/>
              <SelectMovie dsPhim={this.props.dsPhim}/>
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