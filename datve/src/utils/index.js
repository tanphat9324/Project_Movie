import {settings} from '../common/Config/settings';

// export const login = () => {
//     localStorage.setItem(settings.token);
// }

export const logout = () => {
    localStorage.removeItem(settings.token);
    this.props.history.push('/');
}

export const isLogin = () => {
    console.log('kiem tra dang Nhap');
    if (localStorage.getItem(settings.token)) {
        return true;
    }
    return false;
}