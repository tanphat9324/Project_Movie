import {actionType} from '../constants/QuanLyRapConstant';
const initialState = {
dMucRap:[],
cumRap:[]
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
    default:
        return state
    }
}
