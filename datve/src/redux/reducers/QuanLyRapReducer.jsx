import {actionType} from '../constants/QuanLyRapConstant';
const initialState = {
dMucRap:[],
cumRap:[],
LichChieuHeThongRap:[],
lstCumRap:[],
LichChieuPhim:[]
}

export const QuanLyRapReducer = (state = initialState, action) => {
    switch (action.type) {
    
    case actionType.NHAN_DANH_MUC_HE_THONG_RAP:{
        state.dMucRap=action.dmuc;
        return {...state}
    }
    case actionType.NHAN_THONG_TIN_CUM_RAP:{
        state.cumRap=action.cumRap;
        return {...state}
    }
    case actionType.NHAN_THONG_TIN_LICH_CHIEU_HE_THONG_RAP:{
        state.LichChieuHeThongRap = action.thongTinRap[0];
        let listCumRap = {...state.LichChieuHeThongRap};
        state.lstCumRap = listCumRap.lstCumRap;
        return {...state}
    }
    case actionType.NHAN_THONG_TIN_LICH_CHIEU_PHIM:{
        state.LichChieuPhim = action.thongTinPhim;
        console.log(state.LichChieuPhim);
        
        return {...state}
    }
    default:
        return state
    }
}
