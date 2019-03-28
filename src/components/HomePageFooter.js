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
            <div className="column">
              <div className="card">
                <h3>Card 1</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>
          
            <div className="column">
              <div className="card">
                <h3>Card 2</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>
            
            <div className="column">
              <div className="card">
                <h3>Card 3</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>
            
            <div className="column">
              <div className="card">
                <h3>Card 4</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>
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