import React from  'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import ContactMe from '../components/ContactMe';
import PortfolioPages from '../components/PortfolioPages';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/portfolio' component={Portfolio} exact={true}/>
                <Route path='/portfolio/:id' component={PortfolioPages}/>
                <Route path='/contact' component={ContactMe}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;