import React from 'react';

class SocialMediaLinks extends React.Component{

    handleGithubClick = () => {
        window.open("https://github.com/KofiGharteyTagoe/", '_blank');
    };

    handleLinkedinClick = () => {
        window.open("https://www.linkedin.com/in/kofi-a-ghartey-tagoe-6a899b58/", '_blank');
    };
    render(){
        return(
            <div className="linkImages">
            <div className="github-img icon-img" onClick={this.handleGithubClick} ></div>
            <div className="linkedin-img icon-img" onClick={this.handleLinkedinClick}></div>
            </div>
        )
    }
}

export default SocialMediaLinks;