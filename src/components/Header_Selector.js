import React from 'react';
import Header_WithNav from './Header_WithNav';
import Header_dropDown from './FullPage_Menu';

const Header_Selector = () =>{
    return(
        <div>
            <div className="Header_dropDown">
                <Header_dropDown/>
            </div>

            <div className="Header_WithNav">
                <Header_WithNav/>
            </div>
        
        </div>
    )
}

export default Header_Selector;