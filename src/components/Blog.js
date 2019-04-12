import React from 'react';
import { Router, Route, NavLink} from 'react-router-dom';
import Header_Selector from '../components/Header_Selector';

const Blog = () =>{
    return(
        <div className="blog">
            <Header_Selector/>

            <div className="wrap">
                <div className="intro-header spacetop">
                    <h1> Blogs
                    </h1>

                    <div className="html-content">
                    </div>
                </div>
            </div>
            <section className="cardSection">
                <div className="portfolio-group spacetop">

                <div className="card-container"> 
                    <div className="cardImage sagaBlog"></div>
                    <div className="cardContent blogContent">
                        <h3> How Kofi Ghartey-Tagoe Provides Immediate Business Value by Building Apps with Low-Code</h3>        
                    </div>
                    <div className="cardLinks">
                        <span className="webLink"> <p> Go to Blog </p> </span>
                    </div>
                </div>

                </div>
            </section>

        </div>
    )};

export default Blog;

// <NavLink activeClassName='isActive' to='/portfolio/1'> Link 1</NavLink>
// <NavLink activeClassName='isActive' to='/portfolio/2'> Link 2</NavLink>