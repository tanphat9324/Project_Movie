import { actionType } from '../constants/QuanLyPhimConstant';
import axios from 'axios';
import {settings} from '../../common/Config/settings';

export const nhanDanhSachPhim = dsPhim => {
    return {
        type: actionType.NHAN_DANH_SACH_PHIM,
        dsPhim
    }
}

export const layDanhSachPhim = () => {
    return dispatch => {
        axios({
            method: 'GET',
            url: settings.domain + `/QuanLyPhim/LayDanhSachPhim?maNhom=${settings.groupID}`
        }).then(res => {
            console.log(res.data);
            dispatch(nhanDanhSachPhim(res.data));
        }).catch(err => {
            console.log(err.response);
        })
    }
}

export const themPhimAction = (thongTinPhim) => {
    return dispatch => {
        axios({
            method:'POST',
            url:settings.domain + `/QuanLyPhim/ThemPhim`,
            data:{...thongTinPhim,maNhom:settings.groupID},
            headers: {
                "Authorization": "Bearer  " + localStorage.getItem(settings.token)
              }
        }).then(res => {
            console.log("Thêm phim thành công",res.data);
        }).catch(err => {
            console.log("Thêm phim lỗi"); 
        })
    }
}