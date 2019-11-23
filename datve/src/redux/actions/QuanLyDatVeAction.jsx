import { actionType } from "../constants/QuanLyDatVeConstant";
import { settings } from "../../common/Config/settings";
import axios from "axios";
import swal from "sweetalert2";

export const nhanDanhSachPhongVe = thongTinPhongVe => {
    return {
        type: actionType.NHAN_DANH_SACH_PHONG_VE,
        thongTinPhongVe
    }
}
export const layDanhSachPhongVeAction = (maLichChieu) => {
    return dispatch => {        
        axios({
            method: 'GET',
            url: settings.domain + `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
        }).then(res =>{
            dispatch(nhanDanhSachPhongVe(res.data))            
        }).catch(err => {
        })
    }
}

export const datVeAction = (thongTinDatVe) => {    
    return dispatch => {
        axios({
            method: 'POST',
            url: settings.domain + `/QuanLyDatVe/DatVe`,
            data: thongTinDatVe,
            headers: {
                Authorization: "Bearer  " + localStorage.getItem(settings.token)
              }
        }).then(res => {
            console.log('dat ve thanh cong');
            swal.fire({
            position: 'center',
            icon: 'success',
            title: "Đặt vé thành công",
            showConfirmButton: true,
            timer: 1500,
            })
        }).catch(err => {            
        })
    }
}

export const taoLichChieuAction = (thongTinLichChieu) => {
    return dispatch => {
        axios({
            method:'POST',
            url: settings.domain + `/QuanLyDatVe/TaoLichChieu`,
            data: thongTinLichChieu,
            headers: {
                Authorization: "Bearer  " + localStorage.getItem(settings.token)
              }
        }).then(res => {
            swal.fire({
                position: "center",
                type: "success",
                title: "Tạo lịch chiếu thành công",
                showConfirmButton: false,
                timer: 1500
              });
        }).catch(err => {
        })
    }
}