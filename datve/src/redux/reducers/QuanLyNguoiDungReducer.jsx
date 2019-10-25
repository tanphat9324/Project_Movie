import { actionType } from "../constants/QuanLyNguoiDungConstant";

const initialState = {
  danhSachNguoiDung: [],
  NguoiDungSua: {
    taiKhoan: "testReducer",
    matKhau: "321321",
    email: "TestReducer@gmail.com",
    soDt: "321321231",
    maNhom: "GP11",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "Test Reducer"
  },
  nguoiDangNhap: {
    // accessToken: "",
    // email: "khai@gmail.com",
    // hoTen: "Test Nguoi Dang Nhap",
    // maLoaiNguoiDung: "QuanTri",
    // maNhom: "GP11",
    // soDT: "23123123",
    // taiKhoan: "Tan Phat"
  }
};

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.NHAN_DANH_SACH_NGUOI_DUNG: {
      const data = action.danhSach;
      for (let i = 0; i < data.length; i++) {
        data[i]["stt"] = i + 1;
      }
      state.danhSachNguoiDung = data;
      return { ...state };
    }
    case actionType.CHINH_SUA_NGUOI_DUNG: {
      state.NguoiDungSua = action.NguoiDungSua;
      return { ...state };
    }
    case actionType.NGUOI_DANG_NHAP: {
      state.nguoiDangNhap = action.thongTinTaiKhoan;
      console.log("NguoiDangNhap Reducer", state.nguoiDangNhap);
      return { ...state };
    }
    default:
      return state;
  }
};
