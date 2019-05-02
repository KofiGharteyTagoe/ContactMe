import React from  'react';
import {NavLink} from 'react-router-dom';

class Menu extends React.Component{

    render(){
        return(
                    <nav className="menuNav">
                        <div className="menuDiv">
                            <ul>
                                <li>  <NavLink exact to="/"> Contact Me </NavLink> </li>
                            </ul>
                        </div>
                    </nav>                           
        )
    }
}

export default Menu;