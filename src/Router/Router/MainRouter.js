import React from 'react'

import { Route, Switch } from 'react-router-dom';
import Admin from '../../pages/Admin';
import LandingPage from '../../pages/LandingPage/LandingPage';


const MainRouter = () => {
    return (

        <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/admin" component={Admin} exact />

        </Switch>

    );
}

export default MainRouter;