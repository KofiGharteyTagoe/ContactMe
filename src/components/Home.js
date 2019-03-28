import React from 'react';
import Header from './Header';
import HomePageFooter from './HomePageFooter';
import HomePageMidSection from './HomePageMidSection';

class Home extends React.Component{

    state={
        isBlured: '',
        menuIsClicked: 'hideFooter'
    };

    HandleOptionsClick = () =>{
        if(this.state.isBlured.valueOf()=== ''){
            this.setState(() =>({isBlured: 'blurrable', menuIsClicked: 'displayFooter floatingFooter'}));
        } else{
            this.setState(() =>({isBlured: '', menuIsClicked: 'hideFooter floatingFooter'}));
        }
        
    }

    render(){
        return(
            <div className="Home">
                <section>
                    <Header blurred={this.HandleOptionsClick}/>
                </section>

                <section className={this.state.isBlured} >
                    <HomePageMidSection explore={this.HandleOptionsClick}/>
                </section>

                    <HomePageFooter FooterclassName={this.state.menuIsClicked}/>

            </div>
        )
    }
}

export default Home;