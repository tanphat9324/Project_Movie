import {settings} from '../common/Config/settings';

// export const login = () => {
//     localStorage.setItem(settings.token);
// }

export const logout = () => {
    localStorage.removeItem(settings.token);
    localStorage.removeItem(settings.userLogin);
    this.props.history.push('/');
}

export const isLogin = () => {
    const maLoai=JSON.parse(localStorage.getItem(settings.userLogin)).maLoaiNguoiDung;
    console.log(maLoai);
    
    if (maLoai === "QuanTri"){
        return true;
    }
    return false;
}