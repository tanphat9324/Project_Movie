import React,{ Fragment } from 'react';
import HeaderAdmin from '../components/HeaderAdmin/HeaderAdmin';
import {Redirect, Route} from 'react-router-dom';
import { isLoginAdmin } from '../utils/index';

const AdminLayOut = (props) =>{
    return <Fragment>
        <HeaderAdmin/>
            {props.children}  
    </Fragment>
}

export const PrivateRoute = ({ Component, ...props}) =>(
    <Route {...props} render = {(propComponent)=>(
        isLoginAdmin() ?
        <AdminLayOut>
            <Component {...propComponent} />
        </AdminLayOut>
        : <Redirect to="/" />
    )}/>
)