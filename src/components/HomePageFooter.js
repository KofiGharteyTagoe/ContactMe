import React from  'react';
import {NavLink} from 'react-router-dom';

class HomePageFooter extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            
            <div className={this.props.FooterclassName}>
            <div className="row">

            <NavLink to="/aboutme">
              <div className="column">
                <div className="card">
                <div className="menu-options aboutme-option"></div>
                <hr/>
                  <p>About Me</p>
                </div>
                <div className="shadow"></div>
              </div>
            </NavLink>
            
            <NavLink to="/portfolio">
              <div className="column">
                <div className="card">
                <div className="menu-options portfolio-option"></div>
                <hr/>
                  <p>Portfolio</p>
                </div>
                <div className="shadow"></div>
              </div>
            </NavLink>

            <NavLink to="/blog">
              <div className="column">
                <div className="card">
                <div className="menu-options blog-option"></div>
                <hr/>
                  <p>Blog</p>
                </div>
                <div className="shadow"></div>
              </div>
            </NavLink>

            <NavLink to="/contactme">
              <div className= {`${this.props.cardsShow} column`}>
                <div className="card">
                <div className="menu-options contactme-option"></div>
                <hr/>
                  <p>Contact Me</p>
                </div>
                <div className="shadow"></div>
              </div>
            </NavLink>

          </div> 
            </div>

        )
    }
}

export default HomePageFooter;

/* <NavLink to="/portfolio/1" className="normal" activeClassName="active" exact>
<div className="card"></div>
</NavLink>

<NavLink to="/portfolio/2" className="normal" activeClassName="active" exact>
<div className="card"></div>
</NavLink>

<NavLink to="/portfolio/3" className="normal" activeClassName="active" exact>
<div className="card"></div>
</NavLink>

<NavLink to="/portfolio/3" className="normal" activeClassName="active" exact>
<div className="card"></div>
</NavLink> */