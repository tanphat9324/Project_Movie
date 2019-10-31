import React,{ Fragment } from 'react';
import HeaderAdmin from '../components/HeaderAdmin/HeaderAdmin';
import {Redirect, Route} from 'react-router-dom';
import { isLogin } from '../utils/index';

const AdminLayOut = (props) =>{
    return <Fragment>
        <div className="d-flex">
        <HeaderAdmin/>
            {props.children}  
        </div>
    </Fragment>
}

export const PrivateRoute = ({ Component, ...props}) =>(
    <Route {...props} render = {(propComponent)=>(
        isLogin() ?
        <AdminLayOut>
            <Component {...propComponent} />
        </AdminLayOut>
        : <Redirect to="/" />
    )}/>
)