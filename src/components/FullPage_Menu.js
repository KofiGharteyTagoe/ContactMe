import React from 'react';
import Menu from './Menu';
import Header_dropDown from '../components/Header_dropDown';

class FullPage_Menu extends React.Component{

    state ={
        menuState: false,
        subMenu: 'menu subMenu-close',
    }

    handleMenuClick = () =>{
        this.setState(() =>({menuState:!this.state.menuState}));
    
        document.body.classList.toggle("hideOverflow");
    };
    
    componentWillUnmount =() =>{
        document.body.classList.remove("hideOverflow");
    };

    render(){
        return(
            <div>
                <Header_dropDown handleMenduClick={this.handleMenuClick}/>
                <div className={this.state.menuState===true ?'menu subMenu-open':'menu subMenu-close'}>
                    <Menu/>
                </div>
            </div>

        )
    }
}

export default FullPage_Menu;