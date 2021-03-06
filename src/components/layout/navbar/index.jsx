import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, Feather, } from 'react-feather'

import {NavbarElement, NavbarList, NavbarLogo} from './style'

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
          <NavbarLogo>
            <h3>
              <Link to="/">
                <span className="align-middle"> the Joss </span>
              </Link>
            </h3>
          </NavbarLogo> 
          <div className="main-navigation">
            <NavbarList>
              <li><Link to="/" className="lined-link" activeClassName="active"> <User /> <span> Обо&nbsp;мне </span> </Link></li>   
              <li><Link to="/works" className="lined-link" activeClassName="active"> <Briefcase /> <span> Портфолио </span> </Link></li>  
              <li><Link to="https://t.me/thejossdesign" target="_blank" rel="noreferrer" className="lined-link" activeClassName="active"> <Feather /> <span> Блог </span> </Link></li>
            </NavbarList>
          </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
