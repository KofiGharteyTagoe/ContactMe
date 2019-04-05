import React from  'react';
import {NavLink} from 'react-router-dom';

class Menu extends React.Component{

    render(){
        return(
                    <nav className="menuNav">
                        <div className="menuDiv">
                            <ul>
                                <li>  <NavLink exact to="/"> Home </NavLink> </li>
                                <li>  <NavLink exact to="/aboutme"> About me </NavLink> </li>
                                <li>  <NavLink exact to="/contactme"> Contact me </NavLink> </li>
                                <li>  <NavLink exact to="/portfolio"> Porfolio </NavLink> </li>
                                <li>  <NavLink exact to="/blog"> Blog </NavLink> </li>
                            </ul>
                        </div>
                    </nav>                           
        )
    }
}

export default Menu;