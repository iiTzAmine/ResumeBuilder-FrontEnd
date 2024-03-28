import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/orangeLogo.png'
import "./Css's/NavbarStyle.css"

function NavbarAuth() {
  return (
    <div className=' | container-fluid d-flex justify-content-between align-items-center fixed-top'>
      {/* <h1 className="logo me-auto me-lg-0"><Link to={'/'}>Logo</Link></h1> */}
      <Link to={"/"} className="__logo_container" >
        <img className="__logo" src={Logo} alt=""  />
      </Link>
    </div>
  )
}

export default NavbarAuth
