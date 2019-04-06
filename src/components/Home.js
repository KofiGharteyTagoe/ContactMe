import React from 'react';
import Header from './Header';
import HomePageFooter from './HomePageFooter';
import HomePageMidSection from './HomePageMidSection';
import FullPage_Menu from './FullPage_Menu';

class Home extends React.Component{

    state={
        isBlured: '',
        menuIsClicked: 'hideFooter',
        cardsShow: '',
        barsClassName: false
    };

    HandleOptionsClick = () =>{
        if(this.state.isBlured.valueOf()=== ''){
            this.setState(() =>({isBlured: 'blurrable', menuIsClicked: 'displayFooter floatingFooter', cardsShow: 'cardsShow'}));
        } else{
            this.setState(() =>({isBlured: '', menuIsClicked: 'hideFooter floatingFooter', cardsShow:''}));
        }   
    }

    HandleShowMenuClick = () =>{
        this.setState(() =>({barsClassName: !this.state.barsClassName}));
    }
       
    

    render(){
        return(
            <div className="Home">
                
                <div className="HeaderDiv">
                    <Header
                        blurred={this.HandleOptionsClick}
                        barsClassName={this.state.barsClassName}
                        changeBarsClassName={this.HandleShowMenuClick}
                    />                
                </div>

                <div className="FullHeaderDiv">
                    <FullPage_Menu
                    barsClassName={this.state.barsClassName}
                    changeBarsClassName={this.HandleShowMenuClick}
                    /> 
                </div>



                <section className={this.state.isBlured} >
                    <HomePageMidSection
                        explore={this.HandleOptionsClick}
                        changeBarsClassName={this.HandleShowMenuClick}
                    />
                </section>

                    <HomePageFooter
                        FooterclassName={this.state.menuIsClicked}
                        cardsShow={this.state.cardsShow}
                    />

            </div>
        )
    }
}

export default Home;