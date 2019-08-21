//dependencies
import React from 'react';
import {
        Route, 
        Switch, 
        BrowserRouter as Router
        } from 'react-router-dom';

//components
import Home from "../pages/Home";
import Projects from '../pages/Projects';
import PageNotFound from "../pages/PageNotFound";

const AppRoutes = ()=>{
    return(<Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/Projects" component={Projects}/>
            <Route component={PageNotFound}/>
        </Switch>
    </Router>);
};

export default AppRoutes;