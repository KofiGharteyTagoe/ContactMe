import React from 'react';
import ProgressBar from '../components/ProgressBar';

class SkillsBar extends React.Component{

    constructor(){
        super();

        this.state={
            Mendix: 80,
            HTML: 70,
            CSS: 70,
            React: 50,
            Redux: 20
        }
    }

    render(){
        return(
            <div className="skill-container">
            <h2> My skill set</h2>
            <hr/>
            <div className="clearStyle"></div>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industzry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                <ProgressBar percentage={this.state.Mendix} name={'Mendix'}/>
                <ProgressBar percentage={this.state.HTML} name={'HTML'}/>
                <ProgressBar percentage={this.state.CSS} name={'CSS'}/>
                <ProgressBar percentage={this.state.React} name={'React'}/>
                <ProgressBar percentage={this.state.Redux} name={'Redux'}/>
        </div>
        )
    }
}

export default SkillsBar;