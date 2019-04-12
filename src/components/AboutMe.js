import React from 'react';
import Header_Selector from '../components/Header_Selector';
import SocialMediaLinks from './SoialMediaLinks';

class AboutMe extends React.Component{

    state ={
        menuState: false,
        subMenu: 'menu subMenu-close',
    }


    render(){
        return(
            <div className="aboutme">
                <Header_Selector/>
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
                        <SocialMediaLinks/>
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

                <section className="recommendationsSection">
                <div className="wrap space-top">
                    <div className="intro-header rec-header space-top">
                        <h1> My recommendations</h1>
                    </div>
                </div>

                    <div className="rec-group wrap space-top">
                        <div className="recommendation">
                        <p> "Kofi is a focused, solution orientated and skilled, developer. He is a very effective communicator and understands different audience’s needs and is able to verbalise solution options in terms that non-technical staff can understand. Kofi is very comfortable working in an agile development environment and displays strong collaboration and team focus."</p>
                        <h4> Martin Pring</h4>
                        <h5> Project Manager Suez Recycling and Recovery UK </h5>                        
                        </div>

                        <div className="recommendation">
                        <p> "Kofi was a very fast learner and quickly became a competent programmer during the period he worked for me. He has a very good work ethic and is keen to understand the business aspects of his work as well as the programming. I enjoyed managing Kofi and working with him during that time." </p>
                        <h4> Mark Newcomb </h4>
                        <h5> Head of Technology Transformation and Projects </h5>
                        </div>

                        <div className="recommendation">
                            <p> "I have worked with Kofi for the past 12 months. Kofi is a very fast learner, and a competent programmer having picked up the new development platform from a standing start. He is concientious and has good attention to detail. I've enjoyed working with him as part of the team on a variety of projects." </p>
                            <h4> Richard Beales </h4>
                            <h5> Developer at Carousel Logistics</h5>
                        </div>

                        <div className="recommendation">
                            <p> "Kofi has been instrumental to the success of a highly complex refactor from a badly programmed application to one which support hundreds of users daily. He has been a truly valuable asset to the team. Moreover he is a very talented team player." </p>
                            <h4> Jipson Thomas </h4>
                            <h5> Lead Developer at Saga Healthcare </h5>
                        </div>

                        <div className="recommendation">
                            <p> "I have been working side by side Kofi for a year and a half , and he is a great technical Software developer, who really knows how to work Agile, work with clients, lead projects from start to finish and translate deliverable into customer oriented solutions.
                            As a colleague, Kofi is a great person and in general he is a resource you can always count on: always available and positive. " </p>
                            <h4> Masterman Barimah Aboagye </h4>
                            <h5> Software Developer at Pink Elephant </h5>
                        </div>

                </div>
                </section>

            </div>
        )
    }
}

export default AboutMe;
