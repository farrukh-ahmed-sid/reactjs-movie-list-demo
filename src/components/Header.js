import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="pageHeader">
      <h1>Movies List</h1>
      <NavLink to="/" exact={true}>Dashboard</NavLink>
      <NavLink to="/add">Add Movie</NavLink>
      <NavLink to="/help">Help</NavLink>
    </div>
  </header>
);

export default Header;
