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

class About extends React.Component {
    render() {
        return (
            <div>
                <PageHeader />
                <section className="middle-section">
                    <div className="container">
                        <div className="about-header">
                            header
                        </div>
                        <div className="about-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eaque excepturi in molestias quisquam temporibus voluptate voluptates voluptatibus? At consequatur cumque maxime molestiae perferendis quibusdam reprehenderit! Doloribus maiores nobis optio placeat qui sint suscipit vel. Architecto dolore inventore magni mollitia nemo non officiis possimus quae qui voluptatem! Atque corporis doloremque iusto quasi quidem sit tempore? A ad, aut consequatur delectus dolorum eligendi est eum fugit ipsa magni neque nostrum pariatur provident quibusdam saepe sapiente sequi sint sunt vitae voluptates. Aliquam atque autem cum doloribus ex modi molestias, nemo nobis, quibusdam quisquam totam vel. Aliquam magni nam quam sunt tenetur vitae.
                        </div>
                    </div>
                </section>
            </div>
        )
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