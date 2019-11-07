import React, { Fragment } from 'react';
import { BrowserRouter, Switch,Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Home } from './templates/HomeTemplate.jsx/Home';
import HomePage from './components/pages/HomePage/HomePage';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import { Admin } from './templates/AdminTemplate/Admin';
import DashboardAdmin from './components/DashboardAdmin/DashboardAdmin';
import AddUserAdmin from './components/AddUserAdmin/AddUserAdmin';
import { PrivateRoute } from './templates/PrivateRoute';
import { PublicRoute } from './templates/PublicRoute';
import QuanLyNguoiDungPage from './components/pages/QuanLyNguoiDungPage/QuanLyNguoiDungPage';
import QuanLyNguoiDungAdmin from './components/QuanLyNguoiDungAdmin/QuanLyNguoiDungAdmin';
import HeaderAdmin from './components/HeaderAdmin/HeaderAdmin';
import QuanLyPhimAdmin from './components/QuanLyPhimAdmin/QuanLyPhimAdmin';
import ThongTinCaNhanPage from './components/pages/ThongTinCaNhanPage/ThongTinCaNhanPage';


function App() {

  return (
    <Fragment>
      <BrowserRouter>
      <Switch>
    {/* <Home exact path='/' Component={HomePage}/>
    <Route exact path='/register' component={RegisterPage} />
    <Route exact path='/login' component={LoginPage} /> */}
    {/* <Admin exact path='/admin'Component={DashboardAdmin}/>
    <Route exact path='/admin/register' component = {AddUserAdmin}/> */}
    <Route exact path='/aaa' component={ThongTinCaNhanPage}/>
    <PublicRoute restricted={false} component={HomePage} path="/" exact />
    <PublicRoute restricted={false} component={RegisterPage} path="/register" exact />
    <PublicRoute restricted={false} component={AddUserAdmin} path="/admin/register" exact />
    <PublicRoute restricted={false} component={LoginPage} path="/login" exact />
    {/* <PrivateRoute exact path="/admin" component={DashboardAdmin}/> */}
    <PrivateRoute exact path="/admin" Component={DashboardAdmin}/>
    <PrivateRoute exact path="/admin/quanlynguoidung" Component={QuanLyNguoiDungAdmin}/>
    <PrivateRoute exact path="/admin/quanlyphim" Component={QuanLyPhimAdmin}/>

      </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;





