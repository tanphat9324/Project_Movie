import './Admin.css';
import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import DashboardAdmin from '../../components/DashboardAdmin/DashboardAdmin';
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