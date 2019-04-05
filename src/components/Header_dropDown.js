import React from  'react';
import {NavLink} from 'react-router-dom';

class Header_dropDown extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            menuState: false,
            subMenu: 'menu subMenu-close'
        }
    }



    render(){
        return(
                <header>
                    <div className="headerSection">
                        <NavLink to="/"> <span className="logo"> KOFI | AGT</span> </NavLink>
                        <div className={this.props.barsClassName===true ?'menu-toggle-open':'menu-toggle-close'} onClick={this.props.handleMenduClick}></div>
                    </div>
                </header>
        )
    }
}

export default Header_dropDown;