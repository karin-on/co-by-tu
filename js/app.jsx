import React from 'react';
import ReactDOM from 'react-dom';
require('../scss/main.scss');   //tutaj zaciągamy do projektu style, nie w htmlu

import PageHeader from './_header.jsx';
import MiddleSection from './_middle-section.jsx';



class App extends React.Component {
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
        <App/>,
        document.getElementById('app')
    );
});