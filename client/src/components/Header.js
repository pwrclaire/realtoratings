import React from 'react';
import { Link } from 'react-router-dom';
 
const Header = ({props}) => {
  return(
    <nav>
      <div className="nav-wrapper teal">
        <a href="/" className="brand-logo center hide-on-small-only">Rate My Realtor.com</a>
        <a href="/" className="brand-logo center hide-on-med-and-up">RMR.com</a>
        <ul id="nav-mobile" className="right">
          <li><Link to={"/realtor"}>Realtors</Link></li>
        </ul>
      </div>
  </nav>
  )
}

export default Header;