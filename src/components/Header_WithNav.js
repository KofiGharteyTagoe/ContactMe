import React from  'react';
import {NavLink} from 'react-router-dom';

class Header_WithNav extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <header>
                <section className="headerSection">
                    <NavLink to="/"> <span className="logo"> KOFI | AGT</span> </NavLink>

                    <div className="bigDeviceNav">
                        <ul>
                            <li>  <NavLink exact to="/"> Home </NavLink> </li>
                            <li>  <NavLink exact to="/aboutme"> About me </NavLink> </li>
                            <li>  <NavLink exact to="/portfolio"> Porfolio </NavLink> </li>
                            <li>  <NavLink exact to="/blog"> Blog </NavLink> </li>
                            <li>  <NavLink exact to="/contactme"> Contact me </NavLink> </li>
                        </ul>
                    </div>
                </section>
            </header>
        )
    }
}

export default Header_WithNav;