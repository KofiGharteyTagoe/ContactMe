import React from 'react';

const ProgressBar = (props) =>{
    return(
        <div className="progress-container">
            <span className="quality-name"> {props.name} </span>
            <div className="progress-bar">
                <div className="filler" percentage={props.percentage} style={{width: `${props.percentage}%`}}> <span className="percent"> {props.percentage}% </span></div>
            </div>
        </div>
    )
}

export default ProgressBar;