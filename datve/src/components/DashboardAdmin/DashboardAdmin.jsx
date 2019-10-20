import React, { Component,Fragment } from 'react'

export default class DashboardAdmin extends Component {
    render() {
        return (
            <Fragment>
 <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
  {/* Sidebar - Brand */}
  <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div className="sidebar-brand-icon rotate-n-15">
      {/* <i class="fas fa-laugh-wink"></i> */}
    </div>
    <div className="sidebar-brand-text mx-3">Dashboard</div>
  </a>
  {/* Divider */}
  <hr className="sidebar-divider my-0" />
  {/* Divider */}
  <hr className="sidebar-divider" />
  {/* Heading */}
  <div className="sidebar-heading">
    Quản lý
  </div>
  {/* Nav Item - Pages Collapse Menu */}
  {/* Nav Item - Charts */}
  <li className="nav-item">
    <a className="nav-link" href="charts.html">
      <i className="fas fa-fw fa-chart-area" />
      <span>Quản lý phim</span></a>
  </li>
  {/* Nav Item - Tables */}
  <li className="nav-item active">
    <a className="nav-link" href="tables.html">
      <i className="fas fa-fw fa-table" />
      <span>Quản lý người dùng</span></a>
  </li>
  {/* Divider */}
  <hr className="sidebar-divider d-none d-md-block" />
  {/* Sidebar Toggler (Sidebar) */}
  <div className="text-center d-none d-md-inline">
    <button className="rounded-circle border-0" id="sidebarToggle" />
  </div>
</ul>

            </Fragment>
        )
    }
}
