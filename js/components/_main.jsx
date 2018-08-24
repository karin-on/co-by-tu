import React from 'react';
import ReactDOM from 'react-dom';

import PageHeader from './page-header/_page-header.jsx';
import MiddleSection from './middle-section/_middle-section.jsx';


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

export default Main;