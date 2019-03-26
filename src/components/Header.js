import React from  'react';

class Header extends React.Component{

        state = {
            barsClassName: false
        };

    handleBarsClick = () =>{
        this.setState(() =>({barsClassName: !this.state.barsClassName}));
    }

    render(){
        return(
            <header>
            <a href="#" className="logo"> KOFI | AGT</a>
            <div className={this.state.barsClassName===true ?'menu-toggle-open':'menu-toggle-close'} onClick={this.handleBarsClick}></div>
            </header>
        )
    }
}

export default Header;