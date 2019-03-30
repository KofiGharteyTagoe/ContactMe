import React from  'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            barsClassName: false
        };
    }

    handleBarsClick = () =>{
        this.setState(() =>({barsClassName: !this.state.barsClassName}));
    }

    render(){
        return(
            <header>
            <NavLink to="/"> <span className="logo"> KOFI | AGT</span> </NavLink>

            <div className={this.state.barsClassName===true ?'menu-toggle-open':'menu-toggle-close'} onClick={() =>{this.handleBarsClick(); this.props.blurred() }}  ></div>
            </header>
        )
    }
}

export default Header;