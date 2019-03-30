import React from 'react';
import Header from './Header';
import ProgressBar from './ProgressBar';

class AboutMe extends React.Component{
    constructor(){
        super();

        this.state={
            Mendix: 80,
            HTML: 70,
            CSS: 70,
            React: 50,

        }
    }

    handleGithubClick = () => {

        window.open("https://github.com/KofiGharteyTagoe/", '_blank');
    };

    handleLinkedinClick = () => {
        window.open("https://www.linkedin.com/in/kofi-a-ghartey-tagoe-6a899b58/", '_blank');
    };

    render(){
        return(
            <div className="aboutme">
            <section>
                <Header/>

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
                
                    <div className="wrap spacetop">
                        <div className="intro-header spacetop">
                            <h1>
                                <div className=" personalImg pImage" alt="Personal Image">></div>
                                <div className="otherPageCartoon cImage" alt="Cartoon Image"> </div>
                            
                            </h1>

                            <div className="html-content">
                                <ProgressBar percentage={this.state.Mendix} name={'Mendix'}/>
                                <ProgressBar percentage={this.state.HTML} name={'HTML'}/>
                                <ProgressBar percentage={this.state.CSS} name={'CSS/SCSS'}/>
                                <ProgressBar percentage={this.state.React} name={'React'}/>
                            </div>
                        </div>
                    </div>

                
                </section>
            </div>
        )
    }
}

export default AboutMe;