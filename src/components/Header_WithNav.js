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
                            <li>  <NavLink exact to="/"> Contact Me </NavLink> </li>
                        </ul>
                    </div>
                </section>
            </header>
        )
    }
}

export default Header_WithNav;