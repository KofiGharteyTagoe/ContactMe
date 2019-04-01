import React from 'react';

const ProgressBar = (props) =>{
    return(

        <div className="skills">
            <div className="skills-label">
                <h3> {props.name} </h3>
                <span className="percent"> {props.percentage}% </span>
                <div className="clearStyle"></div>
            </div>
            <div className="bar">
                <div className="progress" style={{width: `${props.percentage}%`}}></div>
            </div>                       
        </div>
    )
}

export default ProgressBar;