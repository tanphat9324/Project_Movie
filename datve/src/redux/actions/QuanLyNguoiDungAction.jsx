import {actionType} from '../constants/QuanLyNguoiDungConstant';
import {settings} from '../../common/Config/settings';
import axios from 'axios';
import swal from 'sweetalert2';

export const dangNhapAction = (thongTinNguoiDung) =>{
    return dispatch => {
        axios({
            url:'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            method:'POST',
            data:thongTinNguoiDung
        }).then(result =>{
            localStorage.setItem(settings.userLogin,JSON.stringify(result.data));
            localStorage.setItem(settings.token,result.data.token)
            console.log(result.data);
            swal.fire({
                position: 'top-end',
                type: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        }).catch(err => {
            swal.fire('Thông báo đăng nhập', err.response.data,'error');
        })
    }
}

export const dangKyAction = (thongTinDangKy) =>{
    return dispatch => {
       axios({
        url: settings.domain + `/QuanLyNguoiDung/DangKy`,
        method:'POST',
        data:{...thongTinDangKy,maNhom:settings.groupID,
        maLoaiNguoiDung: "KhachHang"},
        header:{
            "Authorization": "Bearer  " + localStorage.getItem(settings.token)
        }
       }).then(result =>{
        console.log(result.data);
        swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
       }).catch(err => {
        //    console.log(err.response.data);
           swal.fire('Thông báo đăng nhập', err.response.data,'error');
       })
    }
}