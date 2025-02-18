import { actionType } from "../constants/QuanLyNguoiDungConstant";
import { settings } from "../../common/Config/settings";
import axios from "axios";
import swal from "sweetalert2";



export const nguoiDangNhap = () => ({
  type: actionType.NGUOI_DANG_NHAP,
});

export const dangNhapAction = (thongTinNguoiDung, callback) => {
  return dispatch => {
    axios({
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: thongTinNguoiDung
    })
      .then(result => {
        localStorage.setItem(settings.userLogin, JSON.stringify(result.data));
        localStorage.setItem(settings.token, result.data.accessToken);
        localStorage.setItem(settings.taiKhoan, result.data.taiKhoan);

        // console.log("dang Nhap thanh cong action");      
        // console.log("dang Nhap action ", result.data);
        swal.fire({
          position: "top-end",
          type: "success",
          title: "Đăng nhập thành công",
          showConfirmButton: false,
          timer: 1500
        }).then(() =>  {
          callback()
        });

      })
      .catch(err => {  
        console.log(err);
              
        swal.fire("Thông báo đăng nhập", err.response.data, "error");
        // console.log(err.response.status);

        
      });
  };
};

export const dangKyAction = thongTinDangKy => {
  return dispatch => {
    axios({
      url: settings.domain + `/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: {
        ...thongTinDangKy,
        maNhom: settings.groupID,
        maLoaiNguoiDung: "KhachHang"
      }
      // header:{
      //     "Authorization": "Bearer  " + localStorage.getItem(settings.token)
      // }
    })
      .then(result => {
        console.log(result.data);
        swal.fire({
          position: "top-end",
          type: "success",
          title: " Đăng ký thành công",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(err => {
        //    console.log(err.response.data);
        swal.fire("Thông báo đăng nhập", err.response.data, "error");
      });
  };
};

export const nhanDanhSachNguoiDung = danhSach => {
  return {
    type: actionType.NHAN_DANH_SACH_NGUOI_DUNG,
    danhSach
  };
};

export const layDanhSachNguoiDungAction = () => {
  return dispatch => {
    axios({
      method: "GET",
      url:
        settings.domain +
        `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${settings.groupID}`
    })
      .then(res => {
        // console.log(res.data);
        dispatch(nhanDanhSachNguoiDung(res.data));
      })
      .catch(err => {
        // console.log(err.response.data);
      });
  };
};

export const chinhSuaNguoiDungAction = NguoiDungSua => {
  return {
    type: actionType.CHINH_SUA_NGUOI_DUNG,
    NguoiDungSua
  };
};

export const CapNhatNguoiDungAction = thongTinNguoiDung => {
  return dispatch => {
    axios({
      method: "PUT",
      url: settings.domain + "/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      data: {
        ...thongTinNguoiDung,
        maNhom: settings.groupID,
        // maLoaiNguoiDung: "KhachHang"
      },
      headers: {
        Authorization: "Bearer  " + localStorage.getItem(settings.token)
      }
    })
      .then(res => {
        console.log('thanh cong cap nhat');
        dispatch(layDanhSachNguoiDungAction())
      })
      .catch(err => {
        // console.log(err.response.data);
      });
  };
};
export const addUserAdminAction = thongTinDangKy => {
  return dispatch => {
    axios({
      url: settings.domain + `/QuanLyNguoiDung/ThemNguoiDung`,
      method: "POST",
      data: { ...thongTinDangKy, maNhom: settings.groupID },
      headers: {
        Authorization: "Bearer  " + localStorage.getItem(settings.token)
      }
    })
      .then(result => {
        console.log(result.data);
        swal.fire({
          position: "center",
          type: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        }).then(
          dispatch(layDanhSachNguoiDungAction())
        );
      })
      .catch(err => {
        //    console.log(err.response.data);
        swal.fire("Thông báo đăng ký", err.response.data, "error");
      });
  };
};

export const xoaNguoiDungAction = taiKhoan => {
  return dispatch => {
    axios({
      method: "DELETE",
      url:
        settings.domain + `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      data: taiKhoan,
      headers: {
        Authorization: "Bearer  " + localStorage.getItem(settings.token)
      }
    })
      .then(res => {
        console.log(res);
        // dispatch(xoaNguoiDung(taiKhoan));
        dispatch(layDanhSachNguoiDungAction());
      })
      .catch(err => {
        // console.log(taiKhoan);
      });
  };
};

export const timKiemNguoiDungAction = thongTinNguoiDung => {
  return dispatch => {
    axios({
      method: "GET",
      url:
        settings.domain +
        `/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${settings.groupID}&tuKhoa=${thongTinNguoiDung}`,
      data: thongTinNguoiDung,
      headers: {
        Authorization: "Bearer  " + localStorage.getItem(settings.token)
      }
    })
      .then(res => {
        console.log(res.data);
        dispatch(nhanDanhSachNguoiDung(res.data));
      })
      .catch(err => {
        // console.log(thongTinNguoiDung);
      });
  };
};
