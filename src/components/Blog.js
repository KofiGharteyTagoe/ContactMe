import React from 'react';
import { Router, Route, NavLink} from 'react-router-dom';
import Header_Selector from '../components/Header_Selector';

const Blog = () =>{
    return(
        <div>
        <Header_Selector/>
        <h2> Blog Home Page </h2>
        <p> Checkout the following things written:</p>

        <NavLink activeClassName='isActive' to='/portfolio/1'> Link 1</NavLink>
        <NavLink activeClassName='isActive' to='/portfolio/2'> Link 2</NavLink>
        </div>
    )};

export default Blog;