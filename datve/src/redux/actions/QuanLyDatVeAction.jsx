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
            // console.log('nhanDanhSachPhongVe',res.data);
            
        }).catch(err => {
            // console.log(err.response.data);
        })
    }
}