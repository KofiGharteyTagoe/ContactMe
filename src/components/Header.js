import React from  'react';

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
            <a href="#" className="logo"> KOFI | AGT</a>
            <div className={this.state.barsClassName===true ?'menu-toggle-open':'menu-toggle-close'} onClick={() =>{this.handleBarsClick(); this.props.blurred() }}  ></div>
            </header>
        )
    }
}

export default Header;