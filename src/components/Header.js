import React from  'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <header>
            <NavLink to="/"> <span className="logo"> KOFI | AGT</span> </NavLink>

            <div className={this.props.barsClassName===true ?'menu-toggle-open':'menu-toggle-close'} onClick={() =>{ this.props.blurred(); this.props.changeBarsClassName() }}  ></div>
            </header>
        )
    }
}

export default Header;