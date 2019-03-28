import React from 'react';
import Header from './Header';

class ContactMe extends React.Component{
    
    handleGithubClick = () => {

        window.open("https://github.com/KofiGharteyTagoe/", '_blank');
    };

    handleLinkedinClick = () => {
        window.open("https://www.linkedin.com/in/kofi-a-ghartey-tagoe-6a899b58/", '_blank');
    };

    render(){

        return(
            <div>
    <Header/>
    <div className="otherPageCartoon" alt="Cartoon Image"> </div>
            <section className="contact-page page">
                <div className="wrap">
                    <div className="intro-header">
                        <h1> Get in touch
                        <div className="linkImages">
                        <div className="github-img" onClick={this.handleGithubClick} ></div>
                        <div className="linkedin-img" onClick={this.handleLinkedinClick}></div>
                        </div>
                        </h1>

                        <div className="html-content">
                            <p>
                                If you’d like to get started on creating something brilliant with us, simply fill out the form below. When it comes to telling us about your project, let us know your idea, where you’re located and the timeline you’re looking at. 
                            </p>
                            <p>
                                Alternatively, you might want to meet the real deal and grab a coffee, we got you buddy - fill out your details and we’ll get back to you as soon as we can.
                        </p>
                        </div>
                    </div>
                </div>

                <div className="wrap form-wrap">
                    <div className="form-container">
                        <form className="enquiry-form light">
                            <label className="field full-width">
                                <span> Full name </span>
                                    <input type="text" name="fullname" placeholder="Your full name" required></input>
                            </label>

                            <label className="field half-width half-width-left">
                            <span> Email address </span>
                                <input type="email" name="email" id="email" placeholder="Your email" required></input>
                            </label>

                            <label className="field half-width half-width-right">
                            <span> Phone number </span>
                                <input type="tel" pattern="^\+?\d{0,13}" name="phone" placeholder="Your phone number" required></input>
                            </label>

                            <label className="field full-width">
                            <span> Leave a message </span>
                                <textarea type="tel"  name="message" placeholder="Your message" required></textarea>
                            </label>

                            <button className="sendButton" type="submit">
                            <span> Send </span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

    </div>
        )
    }

}


export default ContactMe;