import React from 'react';
import { Router, Route, NavLink} from 'react-router-dom';

import FullPage_Menu from './FullPage_Menu';

const Blog = () =>{
    return(
        <div>
        <FullPage_Menu/>
        <h2> Blog Home Page </h2>
        <p> Checkout the following things written:</p>

        <NavLink activeClassName='isActive' to='/portfolio/1'> Link 1</NavLink>
        <NavLink activeClassName='isActive' to='/portfolio/2'> Link 2</NavLink>
        </div>
    )};

export default Blog;