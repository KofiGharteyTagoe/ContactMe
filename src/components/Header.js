import React from  'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1> Portfolio </h1>
            <NavBar/>
    </header>
);

const NavBar = () =>(
    <div>
        <ul>
        <NavLink to='/' activeClassName="isActive" exact={true}> Home </NavLink>
        <NavLink to='/portfolio' activeClassName="isActive" exact={true}> Portfolio </NavLink>
        <NavLink to='/contact' activeClassName="isActive"> Contact</NavLink>

        </ul>
    </div>
);

export default Header;