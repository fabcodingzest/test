import React, { useState } from 'react';
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import NavbarData from './NavbarData';
import './Navbar.css';

const Navbar = () => {
  const [navBar, setNavbar] = useState(false);

  const showNavbar = () => setNavbar(!navBar);

  return (
    <>
      <div className="navbarContainer">
        <div className="navbar">
          <Link to="#" className="menu-bar hamburger">
            <GiIcons.GiHamburgerMenu onClick={showNavbar} />
          </Link>

          <nav className={navBar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showNavbar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bar cancel">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {NavbarData.map((item, index) => {
                return (
                  <li className={item.cName} key={index}>
                    <Link to={item.path} >
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
