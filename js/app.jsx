import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Switch,
    BrowserRouter
} from 'react-router-dom';

require('../scss/main.scss');

import Intro from './components/intro/_intro.jsx';
import Main from './components/_main.jsx';
import About from './components/about/_about.jsx';
import NotFound from './components/not-found/_not-found.jsx';


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/co-by-tu/" component={Intro} />
                    <Route path="/co-by-tu/main" component={Main} />
                    <Route path="/co-by-tu/about" component={About} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>,
        document.getElementById('app')
    );
});