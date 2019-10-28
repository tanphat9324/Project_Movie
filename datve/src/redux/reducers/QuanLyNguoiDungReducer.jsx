import { actionType } from "../constants/QuanLyNguoiDungConstant";
import {settings} from '../../common/Config/settings'
const initialState = {
  danhSachNguoiDung: [],
  NguoiDungSua: {},
  nguoiDangNhap: {}
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
   const tenDangNhap = JSON.parse(localStorage.getItem(settings.userLogin))
      state.nguoiDangNhap=tenDangNhap;
  //  console.log("NguoiDangNhap Reducer",tenDangNhap);
  //  console.log("NguoiDangNhap Reducer", state.nguoiDangNhap);

      return { ...state };
    }
    default:
      return state;
  }
};
