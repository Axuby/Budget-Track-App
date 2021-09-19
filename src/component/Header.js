import React from "react";
import {NavLink} from "react-router-dom";
import '../styles/components/_header.scss'
const Header = () => (
  <header className='header'>
    <h1 className='title'>Track Your Expenses/Budgets</h1>
    
    <div class='nav-link'>
        <NavLink to="/login" className="nav" activeClassName="is-active">
      Login
    </NavLink>
    <NavLink to="/" className="nav" activeClassName="is-active">
      Dashboard
    </NavLink>
    <NavLink to="/create"  className="nav" activeClassName="is-active">
      Create Expense
    </NavLink>
    <NavLink to="/edit"  className="nav" activeClassName="is-active">
      Edit Expense
    </NavLink>
    <NavLink to="/help" className="nav" activeClassName="is-active">
      Help
    </NavLink>
    </div>
  </header>
);
export default Header;
