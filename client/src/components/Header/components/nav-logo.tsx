import React from 'react';
import FreeCodeCampLogo from '../../../assets/icons/FreeCodeCamp-logo';
import './nav-logo.css';

const NavLogo = (): JSX.Element => {
  // return <FreeCodeCampLogo />;
  return <h1 className='headerLogo'>CareerVio</h1>;
};

NavLogo.displayName = 'NavLogo';
export default NavLogo;
