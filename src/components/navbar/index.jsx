import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from "react-router-dom";
const Navbar = ({titlename}) => {
  const [pagename, setpagename] = useState("ชื่อหน้า");

  useEffect(() => {
    setpagename(titlename);
  }, [titlename]);

  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark navbar-customize">
        <div className='brandheader'>
          {pagename}
        </div>
        <div className="container">
          <div className='brandmenu'>
            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link navbar-font" to="/nuanplan/contact">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navbar-font" to="/nuanplan/blog">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;