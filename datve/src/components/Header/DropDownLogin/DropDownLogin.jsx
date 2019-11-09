import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';

const DropDownLogin = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle style={{backgroundColor:'transparent',color:'red'}}>
      <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src="./assets/images/avatar1.png" />
      <span>Chao ban!</span>
    {/* <NavLink to="/login" href="#">Đăng Nhập</NavLink> */}
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Profile</DropdownItem>
        <DropdownItem><NavLink to='/thongtinnguoidung'>Profile</NavLink></DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropDownLogin;