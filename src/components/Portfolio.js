import React from 'react';
import { Router, Route, NavLink} from 'react-router-dom';
import Header_Selector from '../components/Header_Selector';

const Portfolio = () =>{
    return(
        <div>
        <Header_Selector/>
        <h2> Portfolio Home Page </h2>
        <p> Checkout the following things I've done:</p>

        <NavLink activeClassName='isActive' to='/portfolio/1'> Link 1</NavLink>
        <NavLink activeClassName='isActive' to='/portfolio/2'> Link 2</NavLink>
        </div>
    )};

export default Portfolio;