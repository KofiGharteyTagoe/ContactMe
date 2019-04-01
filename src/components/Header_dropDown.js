import React from  'react';
import {NavLink} from 'react-router-dom';

class Header_dropDown extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <header>
            <section className="headerSection">
            <NavLink to="/"> <span className="logo"> KOFI | AGT</span> </NavLink>

            <div className={this.props.barsClassName===true ?'menu-toggle-open':'menu-toggle-close'} onClick={() =>{ alert("new header")}}  ></div>
            </section>
            </header>
        )
    }
}

export default Header_dropDown;