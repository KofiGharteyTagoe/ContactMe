import React from  'react';

class HomePageMidSection extends React.Component{

    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="HomePageMidSection">
            <div className="blob">
                <div className="personalImage">
                    <div className="cartoon" alt="Cartoon Image"> </div>
                </div>
            </div>
            <div className="HomePageText">
                <h1> Just a web dev </h1>
                <p> I try to find easier and more intuitive ways to make people's (and sometimes, robots) lives better.</p>
            </div>
                <div className="clickToExplore" onClick={this.props.explore}>
                <span className="text"> Click to explore </span>
                <div className="container-scroll">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                </div>
                </div>
        </div>
        )
    }
}

export default HomePageMidSection;