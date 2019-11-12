import {actionType} from '../constants/QuanLyRapConstant';
import axios from 'axios';
import {settings} from '../../common/Config/settings';

export const nhanDanhMucRap = dmuc => {
    return {
        type: actionType.NHAN_DANH_MUC_HE_THONG_RAP,
        dmuc
    }
}

export const layDanhMucRap = () =>{
    return dispatch => {
        axios({
            method:'GET',
            url: settings.domain + `/QuanLyRap/LayThongTinHeThongRap`,
        }).then(res => {
            dispatch(nhanDanhMucRap(res.data));
        }).catch(err => {
            console.log(err.response.data);
        })
    }
}

export const nhanThongTinCumRap = cumRap => {
    return {
        type: actionType.NHAN_THONG_TIN_CUM_RAP,
        cumRap
    }
}

export const layThongTinCumRap = (maHeThongRap) => {
    return dispatch => {
        axios({
            method: 'GET',
            url: settings.domain + `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
        }).then(res =>{
            dispatch(nhanThongTinCumRap(res.data))
        }).catch(err => {
            console.log(err.response.data);
        })
    }
}
export const nhanTTLichChieuHTRap = thongTinRap => {
    return {
        type: actionType.NHAN_THONG_TIN_LICH_CHIEU_HE_THONG_RAP,
        thongTinRap
    }
}
export const layTTLichChieuHTRapAction = (maHeThongRap) => {
    return dispatch => {
        axios({
            method: 'GET',
            url: settings.domain + `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${settings.groupID}`
        }).then(res =>{
            dispatch(nhanTTLichChieuHTRap(res.data))
        }).catch(err => {
            console.log(err.response.data);
        })
    }
}
export const nhanTTLichChieuPhim = thongTinPhim => {
    return {
        type: actionType.NHAN_THONG_TIN_LICH_CHIEU_PHIM,
        thongTinPhim
    }
}
export const layThongTinLichChieuPhimAction = (maPhim) => {
    return dispatch => {
        axios({
            method: 'GET',
            url: settings.domain + `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
        }).then(res =>{
            console.log('phmi acton',res.data);
            
            dispatch(nhanTTLichChieuPhim(res.data))
        }).catch(err => {
            // console.log(err.response.data);
        })
    }
}