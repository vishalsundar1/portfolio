import React from 'react';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';
import TestLink from './TestLink';

const Pages = ({ user }) =>{
    return (
        <Router>
            <Switch>
                <Route exact path = '/'>
                    <Me user={user} />
                </Route>
                <Route exact path = '/projects'>
                    <Me user={user} />
                </Route>
                <Route exact path = '/work'>
                    <Me user={user} />
                </Route>
                <Route exact path = '/'>
                    <Me user={user} />
                </Route>
                <Route exact path = '/testlink'>
                    <Me user={user} />
                </Route>
            </Switch>
        </Router>
    );
};  

export default Pages;
