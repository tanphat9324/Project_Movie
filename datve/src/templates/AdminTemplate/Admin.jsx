import './Admin.css';
import React, { Fragment } from 'react';
import { Route,Redirect } from 'react-router-dom';
import DashboardAdmin from '../../components/DashboardAdmin/DashboardAdmin';
// import {settings} from '../../common/Config/settings'
const AdminLayout = (props) =>{
    return <Fragment>
        {/* <DashboardAdmin/> */}
            {props.children}       
    </Fragment>
}

export const Admin = ({ Component, ...props}) =>(
    <Route {...props} render = {(propComponent)=>(
    <AdminLayout>
        <Component {...propComponent}/>
    </AdminLayout>
    )}/>
)