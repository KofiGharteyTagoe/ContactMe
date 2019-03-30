import React from 'react';
import Header from './Header';
import HomePageFooter from './HomePageFooter';
import HomePageMidSection from './HomePageMidSection';

class Home extends React.Component{

    state={
        isBlured: '',
        menuIsClicked: 'hideFooter',
        cardsShow: ''
    };

    HandleOptionsClick = () =>{
        if(this.state.isBlured.valueOf()=== ''){
            this.setState(() =>({isBlured: 'blurrable', menuIsClicked: 'displayFooter floatingFooter', cardsShow: 'cardsShow'}));
        } else{
            this.setState(() =>({isBlured: '', menuIsClicked: 'hideFooter floatingFooter', cardsShow:''}));
        }
        
    }

    render(){
        return(
            <div className="Home">
                <section className="headerSection">
                    <Header blurred={this.HandleOptionsClick}/>
                </section>

                <section className={this.state.isBlured} >
                    <HomePageMidSection explore={this.HandleOptionsClick}/>
                </section>

                    <HomePageFooter FooterclassName={this.state.menuIsClicked} cardsShow={this.state.cardsShow}/>

            </div>
        )
    }
}

export default Home;