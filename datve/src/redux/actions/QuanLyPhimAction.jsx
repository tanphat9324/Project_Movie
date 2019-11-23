import { actionType } from '../constants/QuanLyPhimConstant';
import axios from 'axios';
import {settings} from '../../common/Config/settings';
import swal from "sweetalert2";

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
                swal.fire({
                    position: "center",
                    type: "success",
                    title: "Đăng nhập thành công",
                    showConfirmButton: false,
                    timer: 1500
                  })
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

export const capNhatPhimAction = (thongTinPhim) => {
    let file = thongTinPhim.hinhAnh;
    thongTinPhim.hinhAnh = file.name;
    console.log('thong tin film action',thongTinPhim);
    
  return dispatch => {
      axios({
        method:"POST",
        url:settings.domain + `/QuanLyPhim/CapNhatPhim`,
        data:thongTinPhim,
        headers: {
            "Authorization": "Bearer  " + localStorage.getItem(settings.token)
          }
      }).then(res => {
          let frm = new FormData();
          frm.append('file',file,thongTinPhim.hinhAnh);
          frm.append('maNhom',settings.groupID)
          frm.append('tenPhim',thongTinPhim.tenPhim);
          axios({
              method:"POST",
              url:settings.domain + `/QuanLyPhim/UploadHinhAnhPhim`,
              data:frm
          }).then(res => {
              swal.fire({
                position: "center",
                type: "success",
                title: "Đăng nhập thành công",
                showConfirmButton: false,
                timer: 1500
              })
          }).catch(err =>{
              console.log("upload loi");
          })
      }).catch(err => {
          console.log(err);
      })
  }
}

export const chinhSuaPhimAction = phimSua => ({
    type:actionType.CHINH_SUA_PHIM,
    phimSua
})

export const layThongTinPhimAction = (maPhim) => {
    return dispatch => {
        axios({
            method:'GET',
            url: settings.domain + `/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
        }).then(res => {
            dispatch(chinhSuaPhimAction(res.data));
        }).catch(err => {
        })
    }
}

export const timKiemPhimAction = (tenPhim) => {
    return dispatch => {
        axios({
            method:'GET',
            url: settings.domain + `/QuanLyPhim/LayDanhSachPhim?maNhom=${settings.groupID}&tenPhim=${tenPhim}`,
        }).then(res => {
            dispatch(nhanDanhSachPhim(res.data))
        }).catch(err => {            
        })
    }
}