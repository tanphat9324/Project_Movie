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
    let file = thongTinPhim.hinhAnh;
    thongTinPhim.hinhAnh = file.name;
    return dispatch => {
        axios({
            method:'POST',
            url:settings.domain + `/QuanLyPhim/ThemPhim`,
            data:{...thongTinPhim,maNhom:settings.groupID},
            headers: {
                "Authorization": "Bearer  " + localStorage.getItem(settings.token)
              }
        }).then(res => {
            console.log("Thêm phim thành công");

            // console.log("file",file);
            // console.log("thongTinPhim.hinhAnh",thongTinPhim.hinhAnh);
            // console.log("thongTinPhim.tenPhim",thongTinPhim.tenPhim);
            
            let frm = new FormData();
            frm.append('file',file,thongTinPhim.hinhAnh);
            frm.append('maNhom',settings.groupID)
            frm.append('tenPhim',thongTinPhim.tenPhim);
            axios({
                method:"POST",
                url:settings.domain + `/QuanLyPhim/UploadHinhAnhPhim`,
                data:frm
            }).then(res => {
                console.log("upload thanh cong");
            }).catch(err =>{
                console.log("upload loi");
            })
        }).catch(err => {
            console.log("Thêm phim lỗi"); 
        })
    }
}

export const xoaPhimAction = (maPhim) => {
    return dispatch =>{
        axios({
            method:'DELETE',
            url: settings.domain + `/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
            headers: {
                "Authorization": "Bearer  " + localStorage.getItem(settings.token)
              }
        }).then(res => {
            console.log(res.data);
            dispatch(layDanhSachPhim());
        }).catch(err => {
            console.log(err.response.data);
        })
    }
}