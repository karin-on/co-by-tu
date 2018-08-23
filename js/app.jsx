import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Switch,
    Link,
    NavLink
} from 'react-router-dom';

require('../scss/main.scss');

import Intro from './_intro.jsx';
import PageHeader from './_header.jsx';
import MiddleSection from './_middle-section.jsx';
import About from './_about.jsx';
import NotFound from './_not-found.jsx';


class Main extends React.Component {
    render() {
        return (
            <div>
                <PageHeader />
                <MiddleSection />
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <HashRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={Intro} />
                    <Route path="/main" component={Main} />
                    <Route path="/about" component={About} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </HashRouter>,
        document.getElementById('app')
    );
});