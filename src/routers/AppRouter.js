import React from  'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

import NotFoundPage from '../components/NotFoundPage';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import ContactMe from '../components/ContactMe';
import AboutMe from '../components/AboutMe';
import PortfolioPages from '../components/PortfolioPages';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/portfolio' component={Portfolio} exact={true}/>
                <Route path='/portfolio/:id' component={PortfolioPages}/>
                <Route path='/contactme' component={ContactMe}/>
                <Route path='/aboutme' component={AboutMe}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;