import React from 'react';
import Header_Selector from '../components/Header_Selector';
import SocialMediaLinks from './SoialMediaLinks';

class ContactMe extends React.Component{

    state={
        fullname: undefined,
        email: undefined,
        phonenumber: undefined,
        message: undefined,
        mailSent: false,
        error: null
    }

    updateFields = (field, value) =>{
        this.setState({
            [field]:value
          })
    }

    submitContactForm = (e) =>{
        e.preventDefault(); 
    }


    render(){

        return(
            <div>
                <Header_Selector/>
                <div className="otherPageCartoon" alt="Cartoon Image"> </div>
                    <section className="contact-page page">
                        <div className="wrap">
                            <div className="intro-header">
                                <h1> Get in touch
                                    <SocialMediaLinks/>
                                </h1>

                                <div className="html-content">
                                    <p>
                                    If you’d like to get started on creating something brilliant with me, simply fill out the form below. When you are sending me a message about your project, let me know your idea, where you’re located and the timeline you’re looking at.
                                    </p>
                                    <p>
                                    Or if you would just like to have an informal chat to gain more information about me and my skills, then simply fill out your details and I will be in contact. 
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className="wrap form-wrap">
                            <div className="form-container">
                                <form onSubmit={this.submitContactForm} className="enquiry-form light">
                                    <label className="field full-width">
                                        <span> Full name </span>
                                            <input onChange={(event) =>{this.updateFields('fullname', event.target.value) }} type="text" name="fullname" placeholder="Your full name" required></input>
                                    </label>

                                    <label className="field half-width half-width-left">
                                    <span> Email address </span>
                                        <input onChange={(event) =>{this.updateFields('email', event.target.value) }} type="email" name="email" id="email" placeholder="Your email" required></input>
                                    </label>

                                    <label className="field half-width half-width-right">
                                    <span> Phone number </span>
                                        <input onChange={(event) =>{this.updateFields('phonenumber', event.target.value) }} type="tel" pattern="^\+?\d{0,13}" name="phone" placeholder="Your phone number" required></input>
                                    </label>

                                    <label className="field full-width">
                                    <span> Leave a message </span>
                                        <textarea onChange={(event) =>{this.updateFields('message', event.target.value) }} type="text"  name="message" placeholder="Your message" required></textarea>
                                    </label>

                                    <button className="sendButton" type="submit">
                                    <span> Send </span>
                                    </button>

                                    <div>
                                        {this.state.mailSent &&
                                            <div>Thank you for contcting us.</div>
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            )
        }

}


export default ContactMe;