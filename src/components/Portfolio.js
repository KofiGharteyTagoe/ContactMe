import React from 'react';
import { Router, Route, NavLink} from 'react-router-dom';
import Header_Selector from '../components/Header_Selector';
import SocialMediaLinks from './SoialMediaLinks';

const Portfolio = () =>{
    return(

        <div className="portfolio">
            <Header_Selector/>

        <div className="wrap">
            <div className="intro-header spacetop">
                <h1> My Portfolio
                    <SocialMediaLinks/>
                </h1>

                <div className="html-content">
                    <p>
                    If you’d like to get started on creating something brilliant with me, simply fill out the form below. When you are sending me a message about your project, let me know your idea, where you’re located and the timeline you’re looking at.
                    </p>
                </div>
            </div>
        </div>
        <section className="cardSection">
            <div className="portfolio-group spacetop">

            <div className="card-container"> 
                <div className="cardImage myportfolio"></div>
                <div className="cardContent">
                    <h3> My Portfolio</h3>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>               
                </div>
                <div className="cardLinks">
                    <span className="webLink"> <p> Website </p> </span>
                    <span className="gitHubLink"> <p> GitHub </p> </span>
                </div>
            </div>

            </div>
        </section>



        </div>
    )};

export default Portfolio;

// <NavLink activeClassName='isActive' to='/portfolio/1'> Link 1</NavLink>
// <NavLink activeClassName='isActive' to='/portfolio/2'> Link 2</NavLink>