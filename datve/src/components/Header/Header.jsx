import React, { Component } from 'react'
// import styles from './Header.css'
import { connect } from 'react-redux';
import { layDanhSachPhim } from '../../redux/actions/phimActions';

class Header extends Component {
    componentDidMount() {
        this.props.layDanhSachPhim();
    }
    render() {
        return (
            <div>
                {this.props.mangPhim.map((phim, index) => {
                    return(
                        <div key={index}>
                            <div>{phim.maPhim}</div>
                            <div>{phim.tenPhim}</div>
                        </div>
                    )
                })}
            </div>


        )
    }
}
const mapStateToProps = (state) => ({
    mangPhim: state.QuanLyDatVeReducer.dsPhim
})
const mapDispatchToProps = (dispatch) => ({
        layDanhSachPhim: () => {
            dispatch(layDanhSachPhim());
        }
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);

