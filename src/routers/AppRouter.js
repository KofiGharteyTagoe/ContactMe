import React from  'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

import NotFoundPage from '../components/NotFoundPage';
import ContactMe from '../components/ContactMe';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path='/' component={ContactMe}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;