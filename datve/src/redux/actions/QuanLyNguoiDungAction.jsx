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
        swal.fire("Thông báo đăng nhập", err.response.data, "error");
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
        dispatch(nhanDanhSachNguoiDung(res.data));
      })
      .catch(err => {
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
      },
      headers: {
        Authorization: "Bearer  " + localStorage.getItem(settings.token)
      }
    })
      .then(res => {
        // localStorage.setItem(settings.userLogin, JSON.stringify(res.data));
        // swal.fire('Mời bạn đăng nhập lại.')
        dispatch(layDanhSachNguoiDungAction())
      })
      .catch(err => {
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
        dispatch(layDanhSachNguoiDungAction());
      })
      .catch(err => {
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
      });
  };
};
