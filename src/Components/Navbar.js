import React from 'react'
import Styles from './Navbar.module.css';
import { FaBars } from 'react-icons/fa'

import './Navbar.module.css'
const NavBar = (props) => {
  return (
    <React.Fragment>
      <nav id="nav" className={`navbar navbar-expand-lg navbar-light fixed-top  ${Styles.Nav} bg-transparent`}>
        <div className="container-fluid">
          <a className={`nav-item ${Styles.Header}`} id="header" href="/">INDIA BANK</a>
          <button className={`navbar-toggler border-warning`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FaBars className={Styles.Navbutton} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item `} >
              <a href="#nav">HOME</a>
              </li>
              <li className={`nav-item `} >
                <a href="#nav">PROFILE</a>
              </li>
              <li className={`nav-item `} >
              <a href="#nav">ACCOUNT</a>
              </li>
              <li className={`nav-item `} >
              <a href="#nav">NET BANKING</a>
              </li>
              <li className={`nav-item`}>
              <a href="#nav">INCOME TAX</a>
              </li>
              <li className={`nav-item `} >
              <a href="#nav">SERVICES</a>
              </li>
              <li className={`nav-item `} >
              <a href="#nav">FAQ</a>
              </li>
              <li className={`nav-item `} >
              <a onClick={props.logout} href="#nav">LOG OUT</a>
                {/* <Link onClick={props.logout} to="" >LOG OUT</Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}
export default NavBar;