import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (
  <header className='header'>
    <h1 className='title'>Expenses</h1>
      <NavLink to="/login" activeClassName="is-active">
      Login
    </NavLink>
    <NavLink to="/" activeClassName="is-active">
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);
export default Header;
