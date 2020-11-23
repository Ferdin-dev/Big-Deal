import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navigation">
      <Link to='/'>
        <ul className='nav-link'>
          <li className="logo">Big <span>Deals</span></li>
        </ul>
      </Link>
      <ul className="nav-link nav-bg">
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/About'>
          <li>About</li>
        </Link>
        <Link to='/Shop'>
          <li>Shop</li>
        </Link>
        <Link to='/Contact'>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav
