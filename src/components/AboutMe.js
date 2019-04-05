import React from 'react';
import FullPage_Menu from './FullPage_Menu';
import Header_dropDown from '../components/Header_dropDown';
import SkillsBar from './SkillsBar';
import Menu from './Menu';

class AboutMe extends React.Component{

    state ={
        menuState: false,
        subMenu: 'menu subMenu-close',
    }
    handleGithubClick = () => {

        window.open("https://github.com/KofiGharteyTagoe/", '_blank');
    };

    handleLinkedinClick = () => {
        window.open("https://www.linkedin.com/in/kofi-a-ghartey-tagoe-6a899b58/", '_blank');
    };

    handleMenuClick = () =>{
        this.setState(() =>({menuState:!this.state.menuState}));

        document.body.classList.toggle("hideOverflow");
    }

    componentWillUnmount(){
        document.body.classList.remove("hideOverflow");
    }



    render(){
        return(
            <div className="aboutme">
                <FullPage_Menu/>
            <section>
                
                <div className="wrap spacetop">
                    <div className="qualities ">

                    <div className="quality-container">
                        <div className="qualityCircle option1"></div>
                        <div className="qualityText"> Analytical </div>
                    </div>


                    <div className="quality-container">
                        <div className="qualityCircle option2"></div>
                        <div className="qualityText"> Responsive & Intuitive </div>
                    </div>

                    <div className="quality-container">
                        <div className="qualityCircle option3"></div>
                        <div className="qualityText"> Creative </div>
                    </div>

                    <div className="quality-container">
                        <div className="qualityCircle option4"></div>
                        <div className="qualityText"> Tailored to you </div>
                    </div>

                </div>


                    <div className="intro-header spacetop">
                    <h1> About Me
                    <div className="linkImages">
                    <div className="github-img icon-img" onClick={this.handleGithubClick} ></div>
                    <div className="linkedin-img icon-img" onClick={this.handleLinkedinClick}></div>
                    </div>
                    </h1>

                    <div className="html-content">
                        <p>
                        If you’d like to get started on creating something brilliant with me, simply fill out the form below. When you are sending me a message about your project, let me know your idea, where you’re located and the timeline you’re looking at.
                        </p>
                        <p>
                        Alternatively, you might want to meet the real deal and grab a coffee - fill out your details and I'll get back to you as soon as I can.
                    </p>
                    </div>
                </div>


                </div>
                </section>

                <section className="skillSection">
                
                    <div className="wrap spacetop-2em">
                        <div className="image-header spacetop">
                            <h1>
                                <div className=" personalImg pImage" alt="Personal Image"></div>
                                <div className="otherPageCartoon cImage" alt="Cartoon Image"> </div>
                            
                            </h1>

                            <div className="html-content">
                                <SkillsBar/>
                            </div>
                        </div>
                    </div>

                
                </section>

            </div>
        )
    }
}

export default AboutMe;
